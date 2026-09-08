window.I18N = {
    nav: {
        home: "Strona główna",
        portfolio: "Portfolio",
        about: "O mnie",
        testimonials: "Opinie",
        contact: "Kontakt"
    },
    hero: {
        title: "Cześć, jestem",
        name: "Kacper",
        subtitle: "Industrial Automation & AI Engineer | Node-RED · Modbus/IoT · Grafana · n8n & MCP AI Agents",
        cta: "Napisz do mnie"
    },
    portfolio: {
        title: "Portfolio",
        projects: {
            blastgate: {
                title: "System automatyzacji odciągu wiórów",
                description: "Sterowanie przepustnicami odciągu w Node-RED na RPi. Czujniki prądu, stany maszyn i bufor pomiarów eliminujący fałszywe odczyty.",
                details: "Szczegóły →"
            },
            nowadroga: {
                title: "Strona poradni terapeutycznej",
                description: "Responsywna witryna z formularzem kontaktowym, optymalizacją mobile-first i podstawowym SEO.",
                details: "Szczegóły →"
            },
            gooseproduction: {
                title: "Goose Production – pipeline treści",
                description: "n8n: agregacja trendów z 4 źródeł, ranking tematów przez agenta AI i generowanie strategii treści wideo.",
                details: "Szczegóły →"
            }
        }
    },
    about: {
        title: "O mnie",
        stats: {
            years: "Lat doświadczenia",
            projects: "Zrealizowanych projektów",
            clients: "Zadowolonych klientów"
        }
    },
    testimonials: {
        title: "Co mówią klienci",
        subtitle: "Opinie osób, z którymi miałem przyjemność współpracować",
        list: [
            {
                text: "Kacper wykonał wyjątkową pracę przy moim projekcie. Kod był dopracowany, wolny od błędów i pokazał głęboką wiedzę techniczną. Szybka realizacja i świetna komunikacja sprawiły, że współpraca była czystą przyjemnością.",
                author: "Johann Schwarz",
                position: "Niemcy"
            },
            {
                text: "Kacper to fantastyczny partner do współpracy. Jego profesjonalizm, terminowość i jakość kodu robią wrażenie. Gorąco polecam — jeśli szukasz solidnie wykonanej pracy przed terminem, to właściwy wybór.",
                author: "Hansel Annie",
                position: "Kanada"
            },
            {
                text: "Świetna współpraca. Moje wymagania były trudne do opisania, ale dzięki Kacperowi osiągnęliśmy zamierzony efekt. Dziękuję jeszcze raz.",
                author: "Roberto Buti",
                position: "Włochy"
            }
        ]
    },
    contact: {
        title: "Kontakt",
        subtitle: "Opisz swój projekt — odpowiem bezpośrednio na maila lub przez wybrany kanał.",
        form: {
            email: "Napisz e-mail",
            fiverr: "Fiverr",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    },
    footer: {
        copyright: "© 2026 Kacper Stefański. Wszystkie prawa zastrzeżone."
    },
    blastgate: {
        title: "System automatyzacji odciągu wiórów",
        subtitle: "Inteligentne sterowanie przepustnicami w instalacji odciągu wiórów",
        tags: { automation: "Automatyka", nodeRed: "Node-RED", rpi: "Raspberry Pi" },
        projectHistory: {
            title: "Historia projektu",
            part1: "Projekt rozpoczął się od zlecenia na Fiverr — klient poszukiwał specjalisty od automatyki. Infrastruktura sprzętowa (odciąg wiórów z serwo-przepustnicami) była gotowa, brakowało natomiast logiki sterowania.",
            part2: "Po analizie potrzeb wybraliśmy Node-RED ze względu na elastyczność, szybkie prototypowanie i łatwą integrację z MQTT oraz czujnikami prądu."
        },
        components: {
            mainController: { title: "Sterownik główny", desc: "Raspberry Pi 4 z Node-RED do zarządzania całym systemem" },
            dampers: { title: "Przepustnice", desc: "3 automatyczne przepustnice z siłownikami 24 V" },
            sensors: { title: "Czujniki", desc: "Sensory prądu do wykrywania stanu maszyn" },
            interface: { title: "Interfejs", desc: "Panel sterowania z wyświetlaczem LCD i przyciskami" },
            power: { title: "Zasilanie", desc: "Redundantny układ zasilania z UPS" },
            safety: { title: "Bezpieczeństwo", desc: "Zabezpieczenia i monitoring ciśnienia" }
        },
        troubleshooting: {
            title: "Problem i rozwiązanie",
            problem: "Podczas testów pojawiły się fałszywe odczyty z czujników prądu — krótkie spadki napięcia były interpretowane jako wyłączenie maszyny, co prowadziło do błędnego sterowania przepustnicami.",
            solution: "Wprowadziliśmy bufor pomiarów i algorytm wykrywania anomalii, który:",
            steps: [
                "Przechowuje historię trzech ostatnich pomiarów",
                "Oblicza średnią z dwóch poprzednich odczytów",
                "Porównuje bieżący wynik ze średnią",
                "Odrzuca podejrzane odczyty przy zbyt dużej różnicy"
            ],
            implementation: "Rozwiązanie wyeliminowało fałszywe przełączenia przepustnic i znacząco poprawiło stabilność systemu."
        },
        conclusions: {
            implementation: { title: "Skuteczna implementacja złożonej logiki", description: "Mimo rozbudowanego diagramu stanów udało się przenieść całą logikę do Node-RED w czytelny i łatwy w utrzymaniu sposób." },
            documentation: { title: "Dokumentacja techniczna", description: "Diagramy przepływu, opisy stanów i komentarze w kodzie ułatwiają dalszy rozwój i serwis systemu." },
            nextStep: { title: "Kolejny krok w automatyce", description: "Doświadczenie z tego projektu stanowi solidną bazę pod kolejne wdrożenia automatyki przemysłowej i IIoT." },
            keyAchievements: {
                title: "Kluczowe osiągnięcia:",
                points: [
                    "Pełna automatyzacja systemu odciągu wiórów",
                    "Kompletna dokumentacja techniczna",
                    "Wydłużenie żywotności elementów dzięki optymalnemu sterowaniu"
                ]
            }
        },
        achievements: {
            points: [
                "Pełna automatyzacja systemu odciągu wiórów",
                "Kompletna dokumentacja techniczna",
                "Wydłużenie żywotności elementów dzięki optymalnemu sterowaniu"
            ]
        },
        sections: {
            projectOverview: "Przegląd projektu",
            systemComponents: "Komponenty systemu",
            mainFeatures: "Główne funkcje",
            flowDiagram: "Diagram przepływu",
            troubleshooting: "Kod | Problemy | Rozwiązania",
            gallery: "Galeria",
            conclusions: "Wnioski i rezultaty"
        },
        mainFeatures: {
            automaticControl: { title: "Sterowanie automatyczne", desc: "System wykrywa stan maszyn i dostosowuje przepustnice bez interwencji operatora." },
            manualControl: { title: "Sterowanie ręczne", desc: "Możliwość ręcznego sterowania przepustnicami z panelu." },
            safetyDelays: { title: "Opóźnienia bezpieczeństwa", desc: "Wbudowane opóźnienia czasowe zapewniają bezpieczne przejścia między stanami." }
        },
        diagram: {
            viewButton: "Zobacz pełny diagram",
            description: "Diagram przedstawia logikę systemu — wszystkie stany i przejścia między nimi."
        },
        projectStats: {
            codeLines: { value: "~150", label: "Linijek kodu" },
            developmentTime: { value: "1", label: "Tydzień realizacji" },
            clientRating: { value: "5/5", label: "Ocena klienta" }
        },
        code: { voltageDetection: "Wykrywanie anomalii napięcia w Node-RED" }
    },
    nowadroga: {
        title: "Strona poradni terapeutycznej",
        subtitle: "Profesjonalna witryna Poradni Leczenia Uzależnień i Współuzależnień w Barlinku",
        projectOverview: "Przegląd projektu",
        projectHistory: "Historia projektu",
        historyText1: "Klientka potrzebowała nowoczesnej strony prezentującej działalność terapeutyczną w sposób przejrzysty i budujący zaufanie potencjalnych pacjentów.",
        historyText2: "Po konsultacjach stworzyliśmy witrynę łączącą profesjonalny wygląd z łatwą obsługą i pełną responsywnością na urządzeniach mobilnych.",
        keyElements: "Kluczowe elementy projektu",
        components: {
            responsiveDesign: { title: "Responsywny design", desc: "Pełna optymalizacja pod urządzenia mobilne i różne rozdzielczości" },
            userInterface: { title: "Intuicyjny interfejs", desc: "Prosty układ ułatwiający nawigację" },
            content: { title: "Treść", desc: "Profesjonalne teksty dopasowane do grupy docelowej" },
            contactForm: { title: "Formularz kontaktowy", desc: "Prosty kanał komunikacji między pacjentem a poradnią" },
            seo: { title: "Optymalizacja SEO", desc: "Struktura i meta tagi przyjazne wyszukiwarkom" },
            fastLoading: { title: "Szybkie ładowanie", desc: "Optymalizacja zasobów dla lepszego UX" }
        },
        mainFeatures: "Główne funkcje",
        features: {
            presentation: { title: "Prezentacja oferty", desc: "Przejrzysty opis usług i form terapii." },
            aboutSection: { title: "Sekcja o terapeucie", desc: "Budowanie zaufania poprzez kwalifikacje i doświadczenie." },
            contactInfo: { title: "Dane kontaktowe", desc: "Łatwy dostęp do kontaktu i lokalizacji poradni." }
        },
        gallery: "Galeria",
        stats: {
            codeLines: "Linijek kodu",
            developmentTime: "Tygodnie realizacji",
            clientRating: "Ocena klienta"
        }
    },
    gooseproduction: {
        title: "Goose Production – pipeline treści",
        subtitle: "System n8n do agregacji trendów, rankingu tematów i generowania strategii treści wideo",
        projectOverview: "Przegląd projektu",
        projectHistory: "O projekcie",
        historyPart1: "Pipeline produkcji treści wideo oparty na dwóch workflowach n8n. Trend Engine v2 zbiera i normalizuje trendy z Google Trends, YouTube, Google News i Reddit na podstawie słów kluczowych z Google Sheets. Topic Ranking Engine v1 rankuje tematy przez agenta AI i generuje strategię treści (tytuły, miniatury, skrypt) dla najlepszego tematu.",
        historyPart2: "Dane płyną przez arkusze: raw_topics → ranked_topics → selected_topic. Wyzwalacze: harmonogram (np. co 3 dni) lub ręcznie. Modele AI można wymieniać pod kątem jakości i kosztów.",
        trendEngine: "Trend Engine v2",
        trendEngineDesc: "Odczytuje słowa kluczowe z Google Sheets i uruchamia cztery równoległe gałęzie (Google Trends, YouTube, Google News, Reddit). Każda normalizuje wyniki do wspólnego formatu i zapisuje je w raw_topics. Wyzwalacz: ręczny lub harmonogram.",
        topicRanking: "Topic Ranking Engine v1",
        topicRankingDesc: "Pobiera nieprzetworzone rekordy z raw_topics, filtruje po świeżości i wyniku. Agent rankingowy zwraca top 20 tematów z ocenami; agent treści generuje strategię wideo i zapisuje wynik w selected_topic.",
        workflowDiagrams: "Diagramy workflow",
        dataFlow: "Przepływ danych",
        dataFlowText: "Słowa kluczowe (Sheets) → Trend Engine → raw_topics → Topic Ranking Engine → ranked_topics → Agent 2 → selected_topic. Stack: n8n, Google Sheets, SerpAPI, YouTube API, Reddit, LLM.",
        conclusions: "Wnioski",
        conclusionsText: "Pipeline łączy zbieranie danych z wielu źródeł, normalizację, ranking AI i generowanie strategii treści w jednym systemie n8n ze stanem w Google Sheets.",
        viewDiagram: "Zobacz pełny diagram"
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
    document.documentElement.lang = "pl";

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
