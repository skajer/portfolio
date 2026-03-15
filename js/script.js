(function () {
    function setActiveLangButton(lang) {
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
    }

    function initLoader() {
        var loader = document.querySelector(".loader");
        if (!loader) return;
        function hide() {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";
            setTimeout(function () { loader.style.display = "none"; }, 500);
        }
        if (document.readyState === "complete") setTimeout(hide, 400);
        else window.addEventListener("load", function () { setTimeout(hide, 400); });
    }

    function initMobileMenu() {
        var toggle = document.querySelector(".menu-toggle");
        var menu = document.querySelector(".nav-menu");
        if (!toggle || !menu) return;
        toggle.addEventListener("click", function () { menu.classList.toggle("active"); });
        document.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () { menu.classList.remove("active"); });
        });
    }

    function initActiveNav() {
        var sections = ["hero", "portfolio", "about", "opinie", "kontakt"];
        function updateActive() {
            var scroll = window.scrollY + 120;
            var current = "hero";
            sections.forEach(function (id) {
                var el = document.getElementById(id);
                if (el && el.offsetTop <= scroll) current = id;
            });
            document.querySelectorAll(".nav-link").forEach(function (link) {
                var href = (link.getAttribute("href") || "").replace(/^[^#]*#?/, "");
                if (!href && link.getAttribute("data-translate") === "nav.home") href = "hero";
                link.classList.toggle("active", (href || "hero") === current);
            });
        }
        window.addEventListener("scroll", updateActive);
        updateActive();
    }

    function initLangSwitcher() {
        var saved = null;
        try { saved = localStorage.getItem("selectedLanguage"); } catch (e) {}
        var lang = (saved === "en" || saved === "pl") ? saved : "pl";
        setActiveLangButton(lang);
        if (window.applyTranslations) window.applyTranslations(lang, "home");
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var l = btn.getAttribute("data-lang");
                if (l !== "pl" && l !== "en") return;
                setActiveLangButton(l);
                if (window.applyTranslations) window.applyTranslations(l, "home");
            });
        });
    }

    function initAutomationLog() {
        var container = document.getElementById("automation-log-content");
        if (!container) return;
        var entries = [
            { time: "08:32", service: "n8n", msg: "workflow \"Sync\" triggered" },
            { time: "08:31", service: "Node-RED", msg: "flow deployed" },
            { time: "08:30", service: "MQTT", msg: "workshop/dust → open" },
            { time: "08:29", service: "Home Assistant", msg: "entity light.workshop updated" },
            { time: "08:28", service: "n8n", msg: "3 workflows active" },
            { time: "08:27", service: "Node-RED", msg: "12 nodes running" },
            { time: "08:26", service: "MQTT", msg: "broker connected" },
            { time: "08:25", service: "Node-RED", msg: "inject → function → mqtt out" },
            { time: "08:24", service: "n8n", msg: "webhook received" },
            { time: "08:23", service: "Home Assistant", msg: "state changed" }
        ];
        var maxLines = 5;
        var index = 0;

        function addLine() {
            var entry = entries[index % entries.length];
            index += 1;
            var line = document.createElement("div");
            line.className = "log-line";
            line.setAttribute("role", "text");
            line.innerHTML = "<span class=\"log-time\">[" + entry.time + "]</span><span class=\"log-service\">" + entry.service + "</span><span class=\"log-msg\">· " + entry.msg + "</span>";
            container.appendChild(line);
            var children = container.querySelectorAll(".log-line");
            if (children.length > maxLines) container.removeChild(children[0]);
        }

        setTimeout(addLine, 400);
        setInterval(addLine, 2600);
    }

    function initCopyEmail() {
        document.querySelectorAll(".btn-copy-email").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var email = btn.getAttribute("data-email") || "";
                if (!email) return;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(email).then(function () {
                        var t = btn.textContent;
                        btn.textContent = (btn.getAttribute("data-translate") === "contact.form.copyEmail" && document.documentElement.lang === "pl") ? "Skopiowano" : "Copied";
                        setTimeout(function () { btn.textContent = t; }, 1500);
                    });
                } else {
                    var sel = document.createElement("textarea");
                    sel.value = email;
                    sel.setAttribute("readonly", "");
                    sel.style.position = "absolute";
                    sel.style.left = "-9999px";
                    document.body.appendChild(sel);
                    sel.select();
                    try {
                        document.execCommand("copy");
                        var t = btn.textContent;
                        btn.textContent = document.documentElement.lang === "pl" ? "Skopiowano" : "Copied";
                        setTimeout(function () { btn.textContent = t; }, 1500);
                    } catch (e) {}
                    document.body.removeChild(sel);
                }
            });
        });
    }

    function init() {
        initLoader();
        initMobileMenu();
        initActiveNav();
        initLangSwitcher();
        initCopyEmail();
        initAutomationLog();
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
