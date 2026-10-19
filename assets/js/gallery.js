(() => {
    "use strict";
    const links = [...document.querySelectorAll("[data-gallery-item]")];
    const dialog = document.querySelector(".gallery-dialog");
    if (!links.length || !dialog || typeof dialog.showModal !== "function")
        return;
    const image = dialog.querySelector("[data-gallery-full-image]");
    const title = dialog.querySelector("#gallery-viewer-title");
    const counter = dialog.querySelector("[data-gallery-counter]");
    const previous = dialog.querySelector("[data-gallery-prev]");
    const next = dialog.querySelector("[data-gallery-next]");
    let current = 0;
    let opener;
    const show = (index) => {
        current = (index + links.length) % links.length;
        const link = links[current];
        image.src = link.href;
        image.alt = link.dataset.galleryAlt;
        title.textContent = link.dataset.galleryTitle;
        counter.textContent = current + 1 + " / " + links.length;
    };

    links.forEach((link, index) =>
        link.addEventListener("click", (event) => {
            if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            )
                return;
            event.preventDefault();
            opener = link;
            show(index);
            dialog.showModal();
        })
    );

    dialog
        .querySelector("[data-gallery-close]")
        .addEventListener("click", () => dialog.close());

    previous.addEventListener("click", () => show(current - 1));
    next.addEventListener("click", () => show(current + 1));
    previous.hidden = next.hidden = links.length < 2;

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            show(current + (event.key === "ArrowRight" ? 1 : -1));
        }
    });

    dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        )
            dialog.close();
    });

    dialog.addEventListener("close", () => opener?.focus());
})();
