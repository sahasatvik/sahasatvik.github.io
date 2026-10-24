(() => {
    "use strict";
    const settingsElement = document.getElementById("activity-settings");
    if (!settingsElement) return;
    let settings;
    try {
        settings = JSON.parse(settingsElement.textContent);
    } catch {
        return;
    }
    if (!settings?.enabled) return;

    const newTab = document.currentScript?.dataset.externalNewTab !== "false";
    const refreshSeconds = Number(settings.refresh_seconds);
    const interval =
        (Number.isFinite(refreshSeconds) ? Math.max(10, refreshSeconds) : 30) *
        1000;
    const timeout = 8000;
    const text = (value) => (typeof value === "string" ? value.trim() : "");
    const slots = (service) => [
        ...document.querySelectorAll(`[data-activity="${service}"]`),
    ];
    const lastfm = { slots: slots("lastfm"), ...settings.lastfm, retryAt: 0 };
    const lichess = {
        slots: slots("lichess"),
        ...settings.lichess,
        retryAt: 0,
    };
    let cachedGame = null;
    let detailsRetryAt = 0;
    let active = false;
    let generation = 0;
    let timer;
    let controller;

    function hide(service) {
        service.slots.forEach((slot) => {
            slot.hidden = true;
        });
    }

    function setLink(link, url) {
        link.href = url;
        if (newTab) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        } else {
            link.removeAttribute("target");
            link.removeAttribute("rel");
        }
    }

    function trackURL(value) {
        try {
            const url = new URL(value);
            if (
                !["http:", "https:"].includes(url.protocol) ||
                !["last.fm", "www.last.fm"].includes(url.hostname) ||
                url.username ||
                url.password
            )
                return null;
            url.protocol = "https:";
            return url.href;
        } catch {
            return null;
        }
    }

    function rateLimitError(retryAfter) {
        const error = new Error("Rate limited");
        const seconds = Number(retryAfter);
        error.retryMs = Math.max(
            60000,
            Number.isFinite(seconds)
                ? seconds * 1000
                : Date.parse(retryAfter) - Date.now() || 0
        );
        return error;
    }

    async function getJSON(url, signal) {
        const request = new AbortController();
        const abort = () => request.abort();
        signal.addEventListener("abort", abort, { once: true });
        if (signal.aborted) abort();
        const deadline = setTimeout(abort, timeout);
        try {
            const response = await fetch(url, {
                signal: request.signal,
                headers: { Accept: "application/json" },
                credentials: "omit",
                referrerPolicy: "no-referrer",
            });
            if (response.status === 429)
                throw rateLimitError(response.headers.get("Retry-After"));
            if (!response.ok) throw new Error("Activity unavailable");
            return await response.json();
        } finally {
            clearTimeout(deadline);
            signal.removeEventListener("abort", abort);
        }
    }

    async function updateLastfm(signal, current) {
        const url = new URL("https://ws.audioscrobbler.com/2.0/");
        url.search = new URLSearchParams({
            method: "user.getrecenttracks",
            user: lastfm.username,
            api_key: lastfm.api_key,
            limit: "1",
            format: "json",
        });
        const data = await getJSON(url, signal);
        if (data.error === 29) throw rateLimitError();
        if (data.error) throw new Error("Last.fm unavailable");
        const tracks = data.recenttracks?.track;
        const track = Array.isArray(tracks) ? tracks[0] : tracks;
        const name = text(track?.name);
        const href = trackURL(track?.url);
        if (!current()) return;
        if (
            ![true, "true"].includes(track?.["@attr"]?.nowplaying) ||
            !name ||
            !href
        ) {
            hide(lastfm);
            return;
        }
        const artist = text(track.artist?.["#text"] ?? track.artist);
        const album = text(track.album?.["#text"] ?? track.album);
        lastfm.slots.forEach((slot) => {
            const link = slot.querySelector("[data-activity-track]");
            link.textContent = name;
            setLink(link, href);
            slot.querySelector("[data-activity-artist]").textContent = artist;
            slot.title = album ? `Album: ${album}` : "";
            slot.querySelector("[data-activity-artist-clause]").hidden =
                !artist;
            slot.hidden = false;
        });
    }

    function showChess(playing, opponent = "") {
        const tv = `https://lichess.org/@/${encodeURIComponent(lichess.username)}/tv`;
        lichess.slots.forEach((slot) => {
            slot.querySelector("[data-activity-online]").hidden = playing;
            slot.querySelector("[data-activity-playing]").hidden = !playing;
            slot.querySelector("[data-activity-opponent]").textContent =
                opponent;
            slot.querySelector("[data-activity-opponent-clause]").hidden =
                !opponent;
            setLink(slot.querySelector("[data-activity-game]"), tv);
            slot.hidden = false;
        });
    }

    async function updateLichess(signal, current) {
        const url = new URL("https://lichess.org/api/users/status");
        url.search = new URLSearchParams({
            ids: lichess.username,
            withGameIds: "true",
        });
        const users = await getJSON(url, signal);
        if (!Array.isArray(users)) throw new Error("Invalid Lichess status");
        const username = lichess.username.toLowerCase();
        const status = users.find(
            (user) => text(user.id || user.name).toLowerCase() === username
        );
        if (!current()) return;
        const playing = status?.playing === true || !!status?.playing?.id;
        if (!playing) {
            cachedGame = null;
            if (status?.online === true) showChess(false);
            else hide(lichess);
            return;
        }
        const id = text(status.playingId || status.playing?.id);
        showChess(true, cachedGame?.id === id ? cachedGame.opponent : "");
        if (
            !/^[a-zA-Z0-9]{8}$/.test(id) ||
            cachedGame?.id === id ||
            Date.now() < detailsRetryAt
        )
            return;
        try {
            const gameURL = new URL(`https://lichess.org/game/export/${id}`);
            gameURL.search = new URLSearchParams({
                moves: "false",
                clocks: "false",
                evals: "false",
                opening: "false",
            });
            const game = await getJSON(gameURL, signal);
            if (!current() || game.id !== id) return;
            if (game.status && !["created", "started"].includes(game.status)) {
                if (status.online === true) showChess(false);
                else hide(lichess);
                return;
            }
            const white = game.players?.white;
            const black = game.players?.black;
            const matches = (player) =>
                text(player?.user?.id || player?.user?.name).toLowerCase() ===
                username;
            const other = matches(white)
                ? black
                : matches(black)
                  ? white
                  : null;
            const name = text(other?.user?.name);
            const opponent = name
                ? `@${name}`
                : Number.isInteger(other?.aiLevel)
                  ? `Stockfish level ${other.aiLevel}`
                  : "";
            if (opponent) cachedGame = { id, opponent };
            showChess(true, opponent);
        } catch (error) {
            if (current() && error.retryMs)
                detailsRetryAt = Date.now() + error.retryMs;
            // The status is still usable when game details are unavailable.
        }
    }

    const services = [
        [lastfm, updateLastfm, text(lastfm.username) && text(lastfm.api_key)],
        [lichess, updateLichess, text(lichess.username)],
    ].filter(([service, , configured]) => service.slots.length && configured);
    if (!services.length) return;

    async function refresh() {
        const run = ++generation;
        const current = () => active && run === generation && !document.hidden;
        controller = new AbortController();
        const signal = controller.signal;
        await Promise.allSettled(
            services.map(async ([service, update]) => {
                if (Date.now() < service.retryAt) return;
                try {
                    await update(signal, current);
                } catch (error) {
                    if (!current()) return;
                    hide(service);
                    if (error.retryMs)
                        service.retryAt = Date.now() + error.retryMs;
                }
            })
        );
        if (current()) timer = setTimeout(refresh, interval);
    }

    function start() {
        if (active || document.hidden) return;
        active = true;
        void refresh();
    }

    function stop() {
        active = false;
        generation++;
        controller?.abort();
        clearTimeout(timer);
        services.forEach(([service]) => hide(service));
    }

    document.addEventListener("visibilitychange", () =>
        document.hidden ? stop() : start()
    );
    window.addEventListener("pagehide", stop);
    window.addEventListener("pageshow", start);
    start();
})();
