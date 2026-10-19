(() => {
    "use strict";
    const data = document.getElementById("quote-data");
    const figure = document.getElementById("quote");
    const text = document.getElementById("quote-text");
    const author = document.getElementById("quote-author");
    const help = document.getElementById("quote-help");
    const announcement = document.getElementById("quote-announcement");

    if (!data || !figure || !text || !author || !help || !announcement) return;

    let quotes;
    try {
        quotes = JSON.parse(data.textContent);
    } catch {
        return;
    } // Keep the rendered fallback if the data cannot be read.

    if (!Array.isArray(quotes) || !quotes.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let current = -1;
    let frame = 0;

    const finishTyping = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        figure.classList.remove("is-typing");
        if (current >= 0) text.textContent = quotes[current].text;
    };

    const type = (value) => {
        finishTyping();
        text.textContent = value;
        text.setAttribute("aria-hidden", "true");
        if (
            figure.dataset.animate !== "true" ||
            reducedMotion.matches ||
            !value
        )
            return;
        const characters =
            typeof Intl.Segmenter === "function"
                ? Array.from(
                      new Intl.Segmenter(undefined, {
                          granularity: "grapheme",
                      }).segment(value),
                      (part) => part.segment
                  )
                : Array.from(value);
        const characterMs = Math.max(0, Number(figure.dataset.characterMs));
        const maxMs = Math.max(0, Number(figure.dataset.maxAnimationMs));
        const duration = Math.min(characters.length * characterMs, maxMs);
        if (!Number.isFinite(duration) || !duration) return;
        const typed = document.createElement("span");
        typed.className = "quote-typed";
        const remaining = document.createElement("span");
        remaining.className = "quote-untyped";
        remaining.textContent = value;
        text.replaceChildren(typed, remaining);
        figure.classList.add("is-typing");
        figure.classList.toggle("has-cursor", figure.dataset.cursor === "true");
        const start = performance.now();
        let previous = -1;
        const step = (now) => {
            const count = Math.min(
                characters.length,
                Math.floor(((now - start) / duration) * characters.length)
            );
            if (count !== previous) {
                typed.textContent = characters.slice(0, count).join("");
                remaining.textContent = characters.slice(count).join("");
                previous = count;
            }
            if (count < characters.length) frame = requestAnimationFrame(step);
            else finishTyping();
        };
        frame = requestAnimationFrame(step);
    };

    const linkedQuote = () => {
        if (!/^#\d+$/.test(location.hash)) return -1;
        const index = Number(location.hash.slice(1));
        return Number.isSafeInteger(index) && index < quotes.length
            ? index
            : -1;
    };

    const randomQuote = () => {
        if (quotes.length === 1) return 0;
        if (current < 0) return Math.floor(Math.random() * quotes.length);
        // Uniformly choose among every quote except the one currently displayed.
        const index = Math.floor(Math.random() * (quotes.length - 1));
        return index >= current ? index + 1 : index;
    };

    const show = (index) => {
        current = index;
        type(quotes[index].text);
        author.textContent = quotes[index].author;
        author.hidden = !quotes[index].author;
        author.setAttribute("aria-hidden", "true");
        figure.classList.toggle(
            "is-monospace",
            quotes[index].font === "monospace"
        );
        figure.title = "Quote #" + index;
        figure.setAttribute(
            "aria-label",
            quotes[index].text +
                (quotes[index].author ? " — " + quotes[index].author : "")
        );
        help.textContent =
            "Quote #" + index + ". Activate to display another quote.";
        // Announce the complete quote once, rather than reading every typed letter.
        announcement.textContent =
            "Quote #" + index + ". " + figure.getAttribute("aria-label");
    };

    const refresh = () => {
        const wasLinked = linkedQuote() >= 0;
        show(randomQuote());
        // Keep numbered quote links in sync without moving the page.
        if (wasLinked) {
            try {
                history.replaceState(null, "", "#" + current);
            } catch {
                /* Refresh still works without history. */
            }
        }
    };

    const initial = linkedQuote();
    show(initial < 0 ? randomQuote() : initial);

    if (quotes.length > 1) {
        figure.setAttribute("role", "button");
        figure.tabIndex = 0;
        figure.setAttribute("aria-describedby", "quote-help");
        figure.addEventListener("click", refresh);
        figure.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                if (!event.repeat) refresh();
            }
        });
    }

    window.addEventListener("hashchange", () => {
        const index = linkedQuote();
        if (index >= 0) show(index);
    });

    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) finishTyping();
    });
})();
