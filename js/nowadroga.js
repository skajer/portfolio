(function () {
    function initPage() {
        var lightbox = document.querySelector(".lightbox");
        if (lightbox) {
            var img = lightbox.querySelector("img");
            var closeBtn = lightbox.querySelector(".lightbox-close");
            var prevBtn = lightbox.querySelector(".lightbox-prev");
            var nextBtn = lightbox.querySelector(".lightbox-next");
            var galleryImages = document.querySelectorAll(".gallery-grid img");
            var currentIndex = 0;

            function openLightbox(i) {
                currentIndex = i;
                if (img && galleryImages[i]) img.src = galleryImages[i].src;
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            }
            function closeLightbox() {
                lightbox.classList.remove("active");
                document.body.style.overflow = "";
            }
            function next() {
                currentIndex = (currentIndex + 1) % galleryImages.length;
                if (img && galleryImages[currentIndex]) img.src = galleryImages[currentIndex].src;
            }
            function prev() {
                currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                if (img && galleryImages[currentIndex]) img.src = galleryImages[currentIndex].src;
            }

            galleryImages.forEach(function (im, i) {
                im.addEventListener("click", function () { openLightbox(i); });
            });
            if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
            if (prevBtn) prevBtn.addEventListener("click", prev);
            if (nextBtn) nextBtn.addEventListener("click", next);
            lightbox.addEventListener("click", function (e) {
                if (e.target === lightbox) closeLightbox();
            });
            document.addEventListener("keydown", function (e) {
                if (!lightbox.classList.contains("active")) return;
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            });
        }

        if (window.applyTranslations) window.applyTranslations("nowadroga");

        var toggle = document.querySelector(".menu-toggle");
        var menu = document.querySelector(".nav-menu");
        if (toggle && menu) {
            toggle.addEventListener("click", function () {
                var open = menu.classList.toggle("active");
                toggle.setAttribute("aria-expanded", open ? "true" : "false");
            });
            document.querySelectorAll(".nav-link").forEach(function (link) {
                link.addEventListener("click", function () {
                    menu.classList.remove("active");
                    toggle.setAttribute("aria-expanded", "false");
                });
            });
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initPage);
    else initPage();
})();
