(() => {
    "use strict";
    const internalOrigins = new Set([location.origin]);
    const siteUrl = document.currentScript?.dataset.siteUrl;
    if (siteUrl) {
        try {
            // Absolute links to the published site stay internal during local previews.
            internalOrigins.add(new URL(siteUrl, document.baseURI).origin);
        } catch {
            /* Relative links still use the current origin. */
        }
    }

    document.querySelectorAll("a[href]").forEach((link) => {
        let url;
        try {
            url = new URL(link.getAttribute("href"), document.baseURI);
        } catch {
            return;
        }

        if (
            !["http:", "https:"].includes(url.protocol) ||
            internalOrigins.has(url.origin)
        )
            return;

        link.target = "_blank";
        link.relList.add("noopener", "noreferrer");
    });
})();
