window.I18N = {
    nav: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About",
        testimonials: "Testimonials",
        contact: "Contact"
    },
    hero: {
        title: "Hi, I'm",
        name: "Kacper",
        subtitle: "Industrial Automation & AI Engineer | Node-RED · Modbus/IoT · Grafana · n8n & MCP AI Agents",
        cta: "Get in touch"
    },
    portfolio: {
        title: "Portfolio",
        projects: {
            blastgate: {
                title: "Dust collection automation",
                description: "Damper control in Node-RED on RPi. Current sensors, machine states, and a measurement buffer to eliminate false readings.",
                details: "Details →"
            },
            nowadroga: {
                title: "Therapy center website",
                description: "Responsive site with contact form, mobile-first layout, and basic SEO optimization.",
                details: "Details →"
            },
            gooseproduction: {
                title: "Goose Production – content pipeline",
                description: "n8n: trend aggregation from 4 sources, AI agent topic ranking, and video content strategy generation.",
                details: "Details →"
            }
        }
    },
    about: {
        title: "About me",
        stats: {
            years: "Years of experience",
            projects: "Completed projects",
            clients: "Satisfied clients"
        }
    },
    testimonials: {
        title: "What clients say",
        subtitle: "Testimonials from people I had the pleasure to work with",
        list: [
            {
                text: "Casper did an exceptional job on my project. His code was polished, bug-free, and showed deep technical knowledge. Fast delivery and great communication made working with him a pleasure.",
                author: "Johann Schwarz",
                position: "Germany"
            },
            {
                text: "Casper is a fantastic partner to work with. His professionalism, timeliness, and code quality are impressive. Highly recommended if you need solid work delivered before the deadline.",
                author: "Hansel Annie",
                position: "Canada"
            },
            {
                text: "Great collaboration. My requirements were difficult to explain, but thanks to Casper we achieved the intended result. Thank you again.",
                author: "Roberto Buti",
                position: "Italy"
            }
        ]
    },
    contact: {
        title: "Contact",
        subtitle: "Describe your project — I'll respond directly via email or your preferred channel.",
        form: {
            email: "Send email",
            fiverr: "Fiverr",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    },
    footer: {
        copyright: "© 2026 Kacper Stefański. All rights reserved."
    },
    blastgate: {
        title: "Dust Collection System Automation",
        subtitle: "Intelligent damper control for a workshop dust extraction system",
        tags: { automation: "Automation", nodeRed: "Node-RED", rpi: "Raspberry Pi" },
        projectHistory: {
            title: "Project history",
            part1: "The project started with a Fiverr request — the client needed an automation specialist. The hardware (dust extraction with servo-controlled dampers) was ready; the control logic was not.",
            part2: "After a needs analysis, we chose Node-RED for its flexibility, rapid prototyping, and easy integration with MQTT and current sensors."
        },
        components: {
            mainController: { title: "Main controller", desc: "Raspberry Pi 4 with Node-RED for system management" },
            dampers: { title: "Dampers", desc: "3 automatic dampers with 24 V actuators" },
            sensors: { title: "Sensors", desc: "Current sensors for machine state detection" },
            interface: { title: "Interface", desc: "Control panel with LCD display and buttons" },
            power: { title: "Power supply", desc: "Redundant power system with UPS" },
            safety: { title: "Safety", desc: "Safety interlocks and pressure monitoring" }
        },
        troubleshooting: {
            title: "Problem and solution",
            problem: "During testing, false readings from current sensors appeared — brief voltage drops were interpreted as machine shutdown, causing incorrect damper switching.",
            solution: "We introduced a measurement buffer and anomaly detection algorithm that:",
            steps: [
                "Stores the last three measurements",
                "Calculates the average of the two previous readings",
                "Compares the current value against that average",
                "Rejects suspicious readings when the difference is too large"
            ],
            implementation: "This eliminated false damper switching and significantly improved system stability."
        },
        conclusions: {
            implementation: { title: "Effective implementation of complex logic", description: "Despite a large state diagram, the full control logic was implemented in Node-RED in a clear, maintainable way." },
            documentation: { title: "Technical documentation", description: "Flow diagrams, state descriptions, and code comments make future development and maintenance straightforward." },
            nextStep: { title: "Next step in automation", description: "This project provides a solid foundation for future industrial automation and IIoT deployments." },
            keyAchievements: {
                title: "Key achievements:",
                points: [
                    "Full automation of the dust collection system",
                    "Complete technical documentation",
                    "Extended component lifetime through optimal control"
                ]
            }
        },
        achievements: {
            points: [
                "Full automation of the dust collection system",
                "Complete technical documentation",
                "Extended component lifetime through optimal control"
            ]
        },
        sections: {
            projectOverview: "Project overview",
            systemComponents: "System components",
            mainFeatures: "Main features",
            flowDiagram: "Flow diagram",
            troubleshooting: "Code | Issues | Solutions",
            gallery: "Gallery",
            conclusions: "Conclusions and results"
        },
        mainFeatures: {
            automaticControl: { title: "Automatic control", desc: "The system detects machine states and adjusts dampers without operator intervention." },
            manualControl: { title: "Manual control", desc: "Operators can override dampers from the control panel." },
            safetyDelays: { title: "Safety delays", desc: "Built-in time delays ensure safe transitions between states." }
        },
        diagram: {
            viewButton: "View full diagram",
            description: "The diagram shows system logic — all states and transitions between them."
        },
        projectStats: {
            codeLines: { value: "~150", label: "Lines of code" },
            developmentTime: { value: "1", label: "Week of development" },
            clientRating: { value: "5/5", label: "Client rating" }
        },
        code: { voltageDetection: "Voltage anomaly detection in Node-RED" }
    },
    nowadroga: {
        title: "Therapy clinic website",
        subtitle: "Professional website for an addiction and co-dependency treatment center in Barlinek",
        projectOverview: "Project overview",
        projectHistory: "Project history",
        historyText1: "The client needed a modern website that clearly presents therapeutic services and builds trust with potential patients.",
        historyText2: "After consultations, we built a site combining a professional look with easy navigation and full mobile responsiveness.",
        keyElements: "Key project elements",
        components: {
            responsiveDesign: { title: "Responsive design", desc: "Full optimization for mobile devices and various screen sizes" },
            userInterface: { title: "Intuitive interface", desc: "Simple layout for easy navigation" },
            content: { title: "Content", desc: "Professional copy tailored to the target audience" },
            contactForm: { title: "Contact form", desc: "Straightforward communication between patients and the clinic" },
            seo: { title: "SEO optimization", desc: "Structure and meta tags friendly to search engines" },
            fastLoading: { title: "Fast loading", desc: "Asset optimization for better user experience" }
        },
        mainFeatures: "Main features",
        features: {
            presentation: { title: "Service presentation", desc: "Clear overview of clinic services and therapy options." },
            aboutSection: { title: "About the therapist", desc: "Building trust through qualifications and experience." },
            contactInfo: { title: "Contact information", desc: "Easy access to contact details and clinic location." }
        },
        gallery: "Gallery",
        stats: {
            codeLines: "Lines of code",
            developmentTime: "Weeks of development",
            clientRating: "Client rating"
        }
    },
    gooseproduction: {
        title: "Goose Production – content pipeline",
        subtitle: "n8n system for trend aggregation, topic ranking, and video content strategy generation",
        projectOverview: "Project overview",
        projectHistory: "About the project",
        historyPart1: "A video content production pipeline built on two n8n workflows. Trend Engine v2 aggregates and normalizes trends from Google Trends, YouTube, Google News, and Reddit using keywords from Google Sheets. Topic Ranking Engine v1 ranks topics via an AI agent and generates a full content strategy (titles, thumbnails, script) for the best topic.",
        historyPart2: "Data flows through sheets: raw_topics → ranked_topics → selected_topic. Triggers: schedule (e.g. every 3 days) or manual. AI models can be swapped for quality and cost tuning.",
        trendEngine: "Trend Engine v2",
        trendEngineDesc: "Reads keywords from Google Sheets and runs four parallel branches (Google Trends, YouTube, Google News, Reddit). Each branch normalizes results to a common format and writes to raw_topics. Trigger: manual or scheduled.",
        topicRanking: "Topic Ranking Engine v1",
        topicRankingDesc: "Fetches unprocessed records from raw_topics, filters by freshness and score. The ranking agent returns the top 20 topics with scores; the content agent generates a video strategy and writes the result to selected_topic.",
        workflowDiagrams: "Workflow diagrams",
        dataFlow: "Data flow",
        dataFlowText: "Keywords (Sheets) → Trend Engine → raw_topics → Topic Ranking Engine → ranked_topics → Agent 2 → selected_topic. Stack: n8n, Google Sheets, SerpAPI, YouTube API, Reddit, LLM.",
        conclusions: "Conclusions",
        conclusionsText: "The pipeline combines multi-source data collection, normalization, AI ranking, and content strategy generation in one n8n system with state stored in Google Sheets.",
        viewDiagram: "View full diagram"
    }
};

window.getI18n = function (key) {
    if (!window.I18N) return null;
    var parts = key.split(".");
    var v = window.I18N;
    for (var i = 0; i < parts.length; i++) {
        if (v == null) return null;
        v = v[parts[i]];
    }
    return typeof v === "string" ? v : (Array.isArray(v) ? v : (v && typeof v === "object" ? v : null));
};

window.applyTranslations = function (scope) {
    if (!scope) return;
    var g = function (key) { return window.getI18n(key); };
    document.documentElement.lang = "en";

    if (scope === "home") {
        document.querySelectorAll("[data-translate]").forEach(function (el) {
            var key = el.getAttribute("data-translate");
            var text = g(key);
            if (typeof text === "string") el.textContent = text;
        });
        return;
    }

    if (scope === "blastgate") {
        var b = function (key) { return g("blastgate." + key); };
        var el = document.querySelector("h1");
        if (el) el.textContent = b("title") || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = b("subtitle") || el.textContent;
        var h3s = document.querySelectorAll(".overview-item h3");
        if (h3s.length) h3s[0].textContent = b("projectHistory.title") || h3s[0].textContent;
        var historyPs = document.querySelectorAll(".overview-item > p");
        if (historyPs.length >= 2) {
            historyPs[0].textContent = b("projectHistory.part1") || historyPs[0].textContent;
            historyPs[1].textContent = b("projectHistory.part2") || historyPs[1].textContent;
        }
        document.querySelectorAll(".component-card").forEach(function (card) {
            var key = card.getAttribute("data-component");
            if (!key) return;
            var title = b("components." + key + ".title");
            var desc = b("components." + key + ".desc");
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        document.querySelectorAll("[data-section]").forEach(function (e) {
            var key = e.getAttribute("data-section");
            if (!key) return;
            var text = b("sections." + key);
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-tag]").forEach(function (e) {
            var text = b("tags." + e.getAttribute("data-tag"));
            if (text) e.textContent = text;
        });
        document.querySelectorAll(".stat-item").forEach(function (item) {
            var key = item.getAttribute("data-stat");
            if (!key) return;
            var val = b("projectStats." + key + ".value");
            var label = b("projectStats." + key + ".label");
            if (val && item.querySelector(".stat-value")) item.querySelector(".stat-value").textContent = val;
            if (label && item.querySelector(".stat-label")) item.querySelector(".stat-label").textContent = label;
        });
        document.querySelectorAll(".feature-card").forEach(function (card) {
            var key = card.getAttribute("data-feature");
            if (!key) return;
            var title = b("mainFeatures." + key + ".title");
            var desc = b("mainFeatures." + key + ".desc");
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        document.querySelectorAll("[data-diagram]").forEach(function (e) {
            var text = b("diagram." + e.getAttribute("data-diagram"));
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = b(key) || g(key);
            if (typeof text === "string") e.textContent = text;
        });
        document.querySelectorAll(".achievement-item p").forEach(function (p, i) {
            var text = b("achievements.points." + i) || b("conclusions.keyAchievements.points." + i);
            if (text) p.textContent = text;
        });
        document.querySelectorAll(".conclusion-item").forEach(function (item, i) {
            var keys = ["implementation", "documentation", "nextStep"];
            if (!keys[i]) return;
            var title = b("conclusions." + keys[i] + ".title");
            var desc = b("conclusions." + keys[i] + ".description");
            if (title && item.querySelector("h3")) item.querySelector("h3").textContent = title;
            if (desc && item.querySelector("p")) item.querySelector("p").textContent = desc;
        });
        return;
    }

    if (scope === "nowadroga") {
        var n = function (key) { return g("nowadroga." + key); };
        var el = document.querySelector(".project-header h1");
        if (el) el.textContent = n("title") || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = n("subtitle") || el.textContent;
        el = document.querySelector("[data-section=\"projectOverview\"]");
        if (el) el.textContent = n("projectOverview") || el.textContent;
        var overviewH3 = document.querySelector(".overview-item h3");
        if (overviewH3) overviewH3.textContent = n("projectHistory") || overviewH3.textContent;
        var historyPs = document.querySelectorAll(".overview-item p");
        if (historyPs.length >= 2) {
            historyPs[0].textContent = n("historyText1") || historyPs[0].textContent;
            historyPs[1].textContent = n("historyText2") || historyPs[1].textContent;
        }
        el = document.querySelector("[data-section=\"keyElements\"]");
        if (el) el.textContent = n("keyElements") || el.textContent;
        ["responsiveDesign", "userInterface", "content", "contactForm", "seo", "fastLoading"].forEach(function (key) {
            var card = document.querySelector("[data-component=\"" + key + "\"]");
            if (!card) return;
            var title = n("components." + key + ".title");
            var desc = n("components." + key + ".desc");
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        el = document.querySelector("[data-section=\"mainFeatures\"]");
        if (el) el.textContent = n("mainFeatures") || el.textContent;
        ["presentation", "aboutSection", "contactInfo"].forEach(function (key) {
            var card = document.querySelector("[data-feature=\"" + key + "\"]");
            if (!card) return;
            var title = n("features." + key + ".title");
            var desc = n("features." + key + ".desc");
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        el = document.querySelector("[data-section=\"gallery\"]");
        if (el) el.textContent = n("gallery") || el.textContent;
        document.querySelectorAll(".stat-item").forEach(function (item) {
            var key = item.getAttribute("data-stat");
            if (!key) return;
            var label = n("stats." + key);
            if (label && item.querySelector(".stat-label")) item.querySelector(".stat-label").textContent = label;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = n(key) || g(key);
            if (typeof text === "string") e.textContent = text;
        });
        return;
    }

    if (scope === "gooseproduction") {
        var o = function (key) { return g("gooseproduction." + key); };
        var el = document.querySelector(".project-header h1");
        if (el) el.textContent = o("title") || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = o("subtitle") || el.textContent;
        document.querySelectorAll("[data-section]").forEach(function (e) {
            var key = e.getAttribute("data-section");
            if (!key) return;
            var text = o(key);
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = (key && key.indexOf("gooseproduction.") === 0) ? g(key) : o(key);
            if (typeof text === "string") e.textContent = text;
        });
    }
};
