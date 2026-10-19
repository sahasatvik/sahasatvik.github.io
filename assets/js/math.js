(() => {
    "use strict";
    const main = document.getElementById("main");
    if (!main || typeof renderMathInElement !== "function") return;

    renderMathInElement(main, {
        delimiters: [
            { left: "\\[", right: "\\]", display: true },
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: true,
        trust: false,
    });

    // Kramdown emits MathJax delimiters; KaTeX renders them locally.
    main.querySelectorAll(".katex-display").forEach((display) => {
        if (display.closest(".equation")) return;
        const wrapper = document.createElement("div");
        wrapper.className = "equation";
        wrapper.tabIndex = 0;
        wrapper.setAttribute("role", "region");
        wrapper.setAttribute("aria-label", "Mathematical equation");
        const outer = display.parentElement;
        outer.replaceWith(wrapper);
        wrapper.append(display);
    });

    // Attach punctuation to the final unbreakable KaTeX fragment. Earlier
    // fragments can still wrap normally; the Markdown source stays unchanged.
    main.querySelectorAll(".katex").forEach((expression) => {
        if (expression.closest(".equation")) return;
        const outer = expression.parentElement;
        const following = outer.nextSibling;
        if (!following || following.nodeType !== Node.TEXT_NODE) return;
        const punctuation = following.textContent.match(
            /^\s*([,.;:!?…)\]}”’]+)/u
        );
        const lastFragment = expression.querySelector(
            ".katex-html > .katex-base:last-child"
        );
        if (!punctuation || !lastFragment) return;
        const visual = document.createElement("span");
        visual.className = "math-punctuation";
        visual.style.font = getComputedStyle(outer).font;
        visual.textContent = punctuation[1];
        lastFragment.append(visual);
        // KaTeX hides its visual HTML from assistive technology. Keep a readable
        // copy beside its MathML, and exclude the visual copy from text selection.
        const accessible = document.createElement("span");
        accessible.className = "sr-only";
        accessible.textContent = punctuation[1];
        outer.after(accessible);
        following.textContent = following.textContent.slice(
            punctuation[0].length
        );
    });
})();
