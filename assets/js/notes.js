(() => {
    "use strict";
    const search = document.querySelector("[data-notes-search]");
    const input = document.getElementById("course-search");
    if (!search || !input) return;

    const entries = [...document.querySelectorAll("[data-course]")];
    const terms = [...document.querySelectorAll("[data-term]")];
    const institutions = [...document.querySelectorAll("[data-institution]")];
    const initialOpen = new Map(terms.map((term) => [term, term.open]));
    const status = document.querySelector("[data-search-status]");
    const empty = document.querySelector("[data-empty-search]");
    const highlights = globalThis.CSS?.highlights;

    const canHighlight =
        highlights && typeof globalThis.Highlight === "function";

    // These fields contain plain text. Direct text children omit the course-count
    // span inside each term summary, which is not part of the searchable content.
    const highlightNodes = canHighlight
        ? [
              ...document.querySelectorAll(
                  "[data-institution] > h2, [data-term] > summary, [data-course] h3 a, [data-course] .resource-summary"
              ),
          ].flatMap((field) =>
              [...field.childNodes].filter(
                  (node) => node.nodeType === Node.TEXT_NODE
              )
          )
        : [];

    const highlightMatches = (words, normalize) => {
        if (!canHighlight) return;
        highlights.delete("notes-search");
        if (!words.length) return;
        const ranges = [];
        const uniqueWords = [...new Set(words)];
        highlightNodes.forEach((node) => {
            if (node.parentElement.closest("[hidden]")) return;
            const text = normalize(node.textContent);
            uniqueWords.forEach((word) => {
                let start = text.indexOf(word);
                while (start !== -1) {
                    const range = document.createRange();
                    range.setStart(node, start);
                    range.setEnd(node, start + word.length);
                    ranges.push(range);
                    start = text.indexOf(word, start + 1);
                }
            });
        });
        if (ranges.length)
            highlights.set("notes-search", new Highlight(...ranges));
    };

    search.hidden = false;

    const update = () => {
        const query = input.value.trim();
        // Any uppercase letter makes the entire query case-sensitive.
        const caseSensitive = query !== query.toLocaleLowerCase();
        const normalize = (text) =>
            caseSensitive ? text : text.toLocaleLowerCase();
        const words = query.split(/\s+/).filter(Boolean);
        let count = 0;

        entries.forEach((entry) => {
            entry.hidden = !words.every((word) =>
                normalize(entry.dataset.search).includes(word)
            );
            if (!entry.hidden) count++;
        });

        terms.forEach((term) => {
            term.hidden = ![...term.querySelectorAll("[data-course]")].some(
                (entry) => !entry.hidden
            );
            term.open = words.length > 0 ? !term.hidden : initialOpen.get(term);
        });

        institutions.forEach((institution) => {
            institution.hidden = ![
                ...institution.querySelectorAll("[data-course]"),
            ].some((entry) => !entry.hidden);
        });

        status.textContent = count + " " + (count === 1 ? "course" : "courses");
        empty.hidden = count > 0;
        highlightMatches(words, normalize);
    };

    input.addEventListener("input", update);
    update();
})();
