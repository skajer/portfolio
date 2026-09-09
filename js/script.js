(function () {
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
                link.classList.toggle("active", (href || "hero") === current);
            });
        }
        window.addEventListener("scroll", updateActive);
        updateActive();
    }

    function initAutomationLog() {
        var container = document.getElementById("automation-log-content");
        if (!container) return;
        var entries = [
            { time: "08:32", service: "n8n", msg: "workflow \"Sync\" triggered" },
            { time: "08:31", service: "Node-RED", msg: "flow deployed" },
            { time: "08:30", service: "MQTT", msg: "workshop/dust → open" },
            { time: "08:29", service: "Modbus", msg: "register 40001 updated" },
            { time: "08:28", service: "Grafana", msg: "SPC dashboard refreshed" },
            { time: "08:27", service: "Node-RED", msg: "12 nodes running" },
            { time: "08:26", service: "MQTT", msg: "broker connected" },
            { time: "08:25", service: "Node-RED", msg: "inject → function → mqtt out" },
            { time: "08:24", service: "n8n", msg: "webhook received" },
            { time: "08:23", service: "MCP Agent", msg: "tool call completed" }
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

    function init() {
        initLoader();
        initMobileMenu();
        initActiveNav();
        if (window.applyTranslations) window.applyTranslations("home");
        initAutomationLog();
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
