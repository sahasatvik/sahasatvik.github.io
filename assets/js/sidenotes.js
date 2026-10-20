(() => {
    "use strict";
    const article = document.querySelector(".article-content");
    if (!article) return;
    const selector = ".sidenote-notes, :scope > .sidenote";
    let notes = [...article.querySelectorAll(selector)];
    if (!notes.length) return;

    article.classList.add("sidenotes-positioned");
    let frame = 0;
    let observed = new Set();
    const sizes =
        typeof ResizeObserver === "function"
            ? new ResizeObserver(schedule)
            : null;

    function clearPositions() {
        notes.forEach((note) => note.style.removeProperty("--sidenote-offset"));
        article.style.removeProperty("--sidenote-height");
    }

    function nextPassage(note) {
        // A run lives beside its preceding passage; standalone notes can also
        // lead an article. Neither case requires moving notes in the DOM.
        const owner = note.closest(".sidenote-group") || note;
        let following = owner.nextElementSibling;
        while (following?.matches(".sidenote")) {
            following = following.nextElementSibling;
        }
        if (following?.matches(".sidenote-group")) {
            following = following.firstElementChild;
        }
        return following?.matches("p, h1, h2, h3, h4, h5, h6")
            ? following
            : null;
    }

    function layout() {
        frame = 0;
        // Content can replace notes or their anchors. Release removed blocks
        // and observe new ones so subsequent size changes are measured too.
        notes = [...article.querySelectorAll(selector)];
        if (sizes) {
            const targets = new Set([article, ...article.children, ...notes]);
            observed.forEach((element) => {
                if (!targets.has(element)) sizes.unobserve(element);
            });
            targets.forEach((element) => {
                if (!observed.has(element)) sizes.observe(element);
            });
            observed = targets;
        }
        // CSS owns the breakpoints and the print fallback. Stale measurements
        // must not survive a switch back to inline notes.
        if (
            !notes.length ||
            getComputedStyle(notes[0]).position !== "absolute"
        ) {
            clearPositions();
            return;
        }

        const articleTop = article.getBoundingClientRect().top;
        // Read all natural anchors before writing any offsets. Subtract the
        // previous translation so repeated layouts can move notes upward too.
        const measurements = notes.map((note) => {
            const rect = note.getBoundingClientRect();
            const offset =
                parseFloat(note.style.getPropertyValue("--sidenote-offset")) ||
                0;
            const top = rect.top - offset;
            const target =
                note.getAttribute("data-attach")?.trim().toLowerCase() ===
                "next"
                    ? nextPassage(note)
                    : null;
            return {
                note,
                top,
                anchorTop: target ? target.getBoundingClientRect().top : top,
                height: rect.height,
                gap: parseFloat(getComputedStyle(note).marginBottom) || 0,
            };
        });
        // Mixed previous/next choices can differ from source order. Resolve
        // collisions in anchor order without changing mobile reading order.
        measurements.sort((a, b) => a.anchorTop - b.anchorTop);
        let bottom = -Infinity;
        measurements.forEach(({ note, top, anchorTop, height, gap }) => {
            // Hidden or empty note groups must not reserve a place in the rail.
            if (!height) {
                note.style.removeProperty("--sidenote-offset");
                return;
            }
            const placedTop = Math.max(anchorTop, bottom);
            const offset = `${placedTop - top}px`;
            if (note.style.getPropertyValue("--sidenote-offset") !== offset) {
                note.style.setProperty("--sidenote-offset", offset);
            }
            bottom = placedTop + height + gap;
        });

        // This affects only the end of the article, never paragraph spacing.
        const height = `${Math.max(0, bottom - articleTop)}px`;
        if (article.style.getPropertyValue("--sidenote-height") !== height) {
            article.style.setProperty("--sidenote-height", height);
        }
    }

    function schedule() {
        if (!frame) frame = requestAnimationFrame(layout);
    }

    const content = new MutationObserver(schedule);
    content.observe(article, {
        childList: true,
        characterData: true,
        subtree: true,
    });
    article.addEventListener("load", schedule, true);
    window.addEventListener("resize", schedule);
    window.addEventListener("beforeprint", clearPositions);
    window.addEventListener("afterprint", schedule);
    if (document.fonts) {
        document.fonts.ready.then(schedule);
        document.fonts.addEventListener("loadingdone", schedule);
    }
    layout();
})();
