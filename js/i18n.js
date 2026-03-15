window.I18N = {
    pl: {
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
            subtitle: "AI & Automation Builder | Node-RED · n8n",
            cta: "Umów się na spotkanie"
        },
        portfolio: {
            title: "Portfolio",
            projects: {
                blastgate: {
                    title: "System automatyzacji odciągu wiórów",
                    description: "Sterowanie przepustnicami odciągu w Node-RED na RPi. Czujniki prądu, stany maszyn, bufor pomiarów przeciw zakłóceniom.",
                    detailsUrl: "automation_dust_collector.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Szczegóły",
                    repo: "Repo",
                    live: "Live"
                },
                nowadroga: {
                    title: "Strona poradni terapeutycznej",
                    description: "Strona poradni w Barlinku: responsywny layout, formularz kontaktowy, optymalizacja pod mobile i SEO.",
                    detailsUrl: "strona_internetowa_poradni.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Szczegóły",
                    repo: "Repo",
                    live: "Live"
                },
                gooseproduction: {
                    title: "Goose Production – pipeline treści",
                    description: "n8n: zbieranie trendów z 4 źródeł (Google Trends, YouTube, News, Reddit), ranking przez agenta AI, generowanie strategii treści do wideo.",
                    detailsUrl: "goose_production.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Szczegóły",
                    repo: "Repo",
                    live: "Live"
                }
            }
        },
        about: {
            title: "O mnie",
            description: "Piszę aplikacje webowe i systemy automatyki (Node-RED, Raspberry Pi, MQTT). Realizuję projekty od frontu po logikę na urządzeniach.",
            stats: { years: "Lata doświadczenia", projects: "Zrealizowanych projektów", clients: "Zadowolonych klientów" }
        },
        testimonials: {
            title: "Co mówią klienci",
            subtitle: "Opinie osób, z którymi miałem przyjemność współpracować",
            list: [
                { text: "Casper wykonał WYJĄTKOWĄ pracę przy moim projekcie! Jego kod był dopracowany, wolny od błędów i pokazał jego głęboką wiedzę. Co więcej, szybka realizacja i duch współpracy sprawiły, że praca z nim była przyjemnością.", author: "Johann Schwarz", position: "Niemcy" },
                { text: "Casper jest fantastyczną osobą do współpracy! To, że jest tak młody, świadczy o tym, jak jest inteligentny i zdolny. Jestem pod wielkim wrażeniem poziomu jego pracy i profesjonalizmu. Gorąco polecam Caspera, jeśli szukasz dobrze wykonanej pracy przed terminem.", author: "Hansel Annie", position: "Kanada" },
                { text: "Świetna współpraca, moje wymagania były trudne do wytłumaczenia, ale dzięki Casperowi osiągnęliśmy zamierzony rezultat. Dziękuję jeszcze raz", author: "Roberto Buti", position: "Włochy" }
            ]
        },
        whyMe: {
            title: "Dlaczego ja?",
            features: [
                { number: "01", title: "Indywidualne podejście", description: "Każdy projekt traktuję jako unikalne wyzwanie, dostosowując rozwiązania do konkretnych potrzeb klienta." },
                { number: "02", title: "Nowoczesne technologie", description: "Wykorzystuję najnowsze narzędzia i frameworki, zapewniając wydajność i przyszłościowe rozwiązania." },
                { number: "03", title: "Terminowość", description: "Projekty realizuję zgodnie z ustalonym harmonogramem, zapewniając regularną komunikację i aktualizacje." }
            ]
        },
        contact: {
            title: "Kontakt",
            subtitle: "Napisz do mnie bezpośrednio.",
            form: { email: "Napisz e-mail", linkedin: "LinkedIn", copyEmail: "Skopiuj e-mail" }
        },
        footer: { copyright: "© 2025 Kacper Stefański. Wszystkie prawa zastrzeżone." },
        blastgate: {
            title: "System automatyzacji odciągu wiórów",
            subtitle: "Inteligentny system sterowania przepustnicami w systemie odciągu wiórów",
            tags: { automation: "Automatyka", nodeRed: "Node-RED", rpi: "RPI" },
            stats: { codeLines: "Linijek kodu", weeks: "Tygodnie realizacji", dampers: "Przepustnice" },
            projectHistory: {
                title: "Historia projektu",
                part1: "Projekt rozpoczął się od wiadomości na platformie Fiverr, gdzie klient poszukiwał specjalisty do implementacji systemu automatyki. Posiadał już kompletną infrastrukturę sprzętową - system odciągu wiórów z przepustnicami sterowanymi serwomechanizmami, ale brakowało mu wiedzy technicznej do zaprogramowania logiki sterowania.",
                part2: "Po wstępnej analizie potrzeb i konsultacjach, zdecydowaliśmy się na wykorzystanie Node-RED jako platformy do implementacji systemu sterowania, ze względu na jego elastyczność i możliwość szybkiego prototypowania rozwiązań."
            },
            components: {
                title: "Komponenty systemu",
                mainController: { title: "Sterownik główny", desc: "Raspberry Pi 4 z Node-RED do zarządzania systemem" },
                dampers: { title: "Przepustnice", desc: "3 automatyczne przepustnice z siłownikami 24V" },
                sensors: { title: "Czujniki", desc: "Sensory prądu do wykrywania stanu maszyn" },
                interface: { title: "Interfejs", desc: "Panel sterowania z wyświetlaczem LCD i przyciskami" },
                power: { title: "Zasilanie", desc: "Redundantny system zasilania z UPS" },
                safety: { title: "Bezpieczeństwo", desc: "System zabezpieczeń i monitoring ciśnienia" }
            },
            troubleshooting: {
                title: "Problem i rozwiązanie",
                problem: "Podczas testów systemu zaobserwowaliśmy fałszywe odczyty z czujników prądu, które mogły prowadzić do nieprawidłowego wykrywania stanu maszyn. Problem polegał na sporadycznych, krótkotrwałych spadkach napięcia, które system interpretował jako wyłączenie urządzenia.",
                solution: "Rozwiązaniem było wprowadzenie bufora pomiarów i algorytmu wykrywania anomalii, który:",
                steps: [
                    "Przechowuje historię ostatnich 3 pomiarów",
                    "Oblicza średnią z dwóch poprzednich odczytów",
                    "Porównuje bieżący odczyt ze średnią poprzednich",
                    "Odrzuca podejrzane odczyty, gdy różnica jest zbyt duża"
                ],
                implementation: "Implementacja tego rozwiązania znacząco poprawiła stabilność systemu, eliminując fałszywe przełączenia przepustnic spowodowane zakłóceniami w pomiarach."
            },
            conclusions: {
                implementation: { title: "Skuteczna implementacja złożonej logiki", description: "Mimo wysokiego stopnia skomplikowania diagramu przepływu, zawierającego liczne stany i warunki przejściowe, udało się skutecznie przenieść całą logikę do Node-RED. Projekt udowodnił, że nawet złożone systemy automatyki można zaimplementować w sposób przejrzysty i efektywny przy użyciu odpowiednich narzędzi." },
                documentation: { title: "Rozwój praktyk dokumentacyjnych", description: "W trakcie realizacji projektu znacząco udoskonaliłem podejście do tworzenia dokumentacji technicznej. Wprowadzenie szczegółowych diagramów, przejrzystych opisów stanów systemu oraz komentarzy w kodzie nie tylko ułatwiło proces rozwoju, ale również zapewniło łatwiejszą konserwację i potencjalne modyfikacje systemu w przyszłości." },
                nextStep: { title: "Kolejny krok w rozwoju automatyki", description: "Pomyślna realizacja tego projektu stanowi kolejny ważny element w rozwoju systemu automatyki. Zdobyte doświadczenie oraz wypracowane rozwiązania będą cennym punktem odniesienia przy realizacji przyszłych projektów automatyzacji." },
                keyAchievements: {
                    title: "Kluczowe osiągnięcia:",
                    points: [
                        "Pełna automatyzacja systemu odciągu wiórów",
                        "Kompletna dokumentacja techniczna",
                        "Zwiększenie żywotności komponentów poprzez optymalne sterowanie"
                    ]
                }
            },
            achievements: {
                title: "Kluczowe osiągnięcia",
                points: [
                    "Pełne zautomatyzowanie systemu odciągu wiórów",
                    "Pełna dokumentacja techniczna systemu",
                    "Zwiększenie żywotności komponentów poprzez optymalne sterowanie"
                ]
            },
            sections: {
                projectOverview: "Przegląd projektu",
                systemComponents: "Komponenty systemu",
                mainFeatures: "Główne funkcje",
                flowDiagram: "Diagram przepływu",
                troubleshooting: "Kody | Problemy | Rozwiązania",
                gallery: "Galeria",
                conclusions: "Wnioski i rezultaty"
            },
            mainFeatures: {
                automaticControl: { title: "Automatyczne sterowanie", desc: "System automatycznie wykrywa stan maszyn i dostosowuje przepustnice." },
                manualControl: { title: "Sterowanie ręczne", desc: "Możliwość manualnego sterowania przepustnicami poprzez przyciski." },
                safetyDelays: { title: "Opóźnienia bezpieczeństwa", desc: "Wbudowane opóźnienia czasowe zapewniające bezpieczne przełączanie stanów." }
            },
            diagram: { viewButton: "Zobacz pełny diagram", description: "Diagram przedstawia logikę działania systemu, włączając wszystkie stany i przejścia między nimi." },
            projectStats: {
                codeLines: { value: "💻 ~ 150", label: "Linijek kodu" },
                developmentTime: { value: "⏱️ 1", label: "Tydzień realizacji" },
                clientRating: { value: "⭐ 5/5", label: "Ocena klienta" }
            },
            code: { voltageDetection: "Wykrywanie anomalii napięcia w Node-RED" }
        },
        nowadroga: {
            title: "Strona internetowa poradni terapeutycznej",
            subtitle: "Profesjonalna strona internetowa dla Poradni Leczenia Uzależnień i Współuzależnień w Barlinku",
            projectOverview: "Przegląd projektu",
            projectHistory: "Historia projektu",
            historyText1: "Projekt rozpoczął się od zgłoszenia potrzeby stworzenia profesjonalnej strony internetowej dla Poradni Leczenia Uzależnień i Współuzależnień \"Nowa Droga\" w Barlinku. Klientka potrzebowała nowoczesnej witryny, która prezentowałaby jej działalność terapeutyczną w sposób przejrzysty i budujący zaufanie potencjalnych pacjentów.",
            historyText2: "Po wstępnych konsultacjach i analizie potrzeb, zdecydowaliśmy się na stworzenie strony, która będzie łączyć profesjonalny wygląd z łatwością obsługi i dostępnością dla wszystkich grup użytkowników, ze szczególnym uwzględnieniem responsywności na urządzeniach mobilnych.",
            keyElements: "Kluczowe elementy projektu",
            components: {
                responsiveDesign: { title: "Responsywny design", desc: "Pełna optymalizacja na urządzenia mobilne i różne rozmiary ekranów" },
                userInterface: { title: "Intuicyjny interfejs", desc: "Prosty i przejrzysty układ ułatwiający nawigację" },
                content: { title: "Zoptymalizowana treść", desc: "Profesjonalne teksty dostosowane do potrzeb grupy docelowej" },
                contactForm: { title: "Formularz kontaktowy", desc: "Łatwy sposób komunikacji między klientami a poradnią" },
                seo: { title: "Optymalizacja SEO", desc: "Dostosowanie strony do wymagań wyszukiwarek internetowych" },
                fastLoading: { title: "Szybkie ładowanie", desc: "Optymalizacja szybkości ładowania dla lepszego doświadczenia użytkownika" }
            },
            mainFeatures: "Główne funkcje",
            features: {
                presentation: { title: "Prezentacja oferty", desc: "Przejrzysta prezentacja usług poradni i dostępnych form terapii." },
                aboutSection: { title: "Sekcja o terapeucie", desc: "Budowanie zaufania poprzez przedstawienie kwalifikacji i doświadczenia terapeutki." },
                contactInfo: { title: "Informacje kontaktowe", desc: "Łatwy dostęp do danych kontaktowych i lokalizacji poradni." }
            },
            gallery: "Galeria",
            stats: { codeLines: "Linijek kodu", developmentTime: "Tygodnie realizacji", clientRating: "Ocena klienta" }
        },
        gooseproduction: {
            title: "Goose Production – pipeline treści",
            subtitle: "System n8n do zbierania trendów, rankingu tematów i generowania strategii treści pod wideo",
            projectOverview: "Przegląd projektu",
            projectHistory: "O projekcie",
            historyPart1: "Projekt to pipeline do produkcji treści wideo: dwa workflowy n8n. Pierwszy (Trend Engine v2) zbiera i normalizuje trendy z Google Trends, YouTube, Google News i Reddita na podstawie słów kluczowych z Google Sheets. Drugi (Topic Ranking Engine v1) pobiera surowe tematy, rankuje je przez agenta AI i generuje gotową strategię treści (tytuły, tekst miniaturki, skrypt) dla najlepszego tematu.",
            historyPart2: "Dane płyną przez arkusze: raw_topics → ranked_topics → selected_topic. Wyzwalacze: harmonogram (np. co 3 dni) lub ręcznie. Modele AI (np. 4o-mini) można wymieniać pod kątem jakości i kosztów.",
            trendEngine: "Trend Engine v2",
            trendEngineDesc: "Odczytuje słowa kluczowe z Google Sheets i uruchamia cztery równoległe gałęzie (Google Trends, YouTube, Google News, Reddit). Każda gałąź iteruje po słowach, wywołuje odpowiednie API (SerpAPI, YouTube Search), normalizuje wyniki do wspólnego formatu i dopisuje rekordy do arkusza raw_topics (timestamp, source, topic, url, score 0–100, processed=false). Wyzwalacz: ręczny lub harmonogram (np. co 3 dni). Limity: SerpAPI 250/mies., filtry świeżości 2–3 dni dla YouTube/Reddit.",
            topicRanking: "Topic Ranking Engine v1",
            topicRankingDesc: "Pobiera nieprzetworzone rekordy z raw_topics (processed=false), filtruje po świeżości i wyniku, ważeniuje źródła. Agent 1 (ranking) dostaje 30–120 tematów i zwraca top 20 z ocenami (trend_strength, relevance, impact, competition, final_score) i uzasadnieniem; wynik zapisywany do ranked_topics, a rekordy oznaczane jako processed. Agent 2 (content) na podstawie ranked_topics generuje strategię: wybrany temat, pomysły na wideo, opcje tytułów, teksty miniatur (3–4 słowa, WIELKIE LITERY, max 25 znaków), pełny skrypt. Wynik z timestampem trafia do selected_topic.",
            workflowDiagrams: "Diagramy workflow",
            dataFlow: "Przepływ danych",
            dataFlowText: "Słowa kluczowe (Sheets) → Trend Engine → raw_topics → Topic Ranking Engine → ranked_topics → Agent 2 → selected_topic. Stack: n8n, Google Sheets, SerpAPI, YouTube API, Reddit, modele LLM (np. OpenAI 4o-mini).",
            techStack: "Stack",
            conclusions: "Wnioski",
            conclusionsText: "Pipeline pokazuje połączenie zbierania danych z wielu źródeł, normalizacji, rankingu przez agenta AI i generowania gotowej strategii treści w jednym systemie n8n z przechowywaniem stanu w Google Sheets.",
            viewDiagram: "Zobacz pełny diagram"
        }
    },
    en: {
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
            subtitle: "AI & Automation Builder | Node-RED · n8n",
            cta: "Get in touch"
        },
        portfolio: {
            title: "Portfolio",
            projects: {
                blastgate: {
                    title: "Dust collection automation",
                    description: "Damper control in Node-RED on RPi. Current sensors, machine states, measurement buffer for noise rejection.",
                    detailsUrl: "automation_dust_collector.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Details",
                    repo: "Repo",
                    live: "Live"
                },
                nowadroga: {
                    title: "Therapy center website",
                    description: "Site for Barlinek clinic: responsive layout, contact form, mobile and SEO optimization.",
                    detailsUrl: "strona_internetowa_poradni.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Details",
                    repo: "Repo",
                    live: "Live"
                },
                gooseproduction: {
                    title: "Goose Production – content pipeline",
                    description: "n8n: trend aggregation from 4 sources (Google Trends, YouTube, News, Reddit), AI agent ranking, content strategy generation for video.",
                    detailsUrl: "goose_production.html",
                    repoUrl: "",
                    liveUrl: "",
                    details: "Details",
                    repo: "Repo",
                    live: "Live"
                }
            }
        },
        about: {
            title: "About me",
            description: "I build web apps and automation systems (Node-RED, Raspberry Pi, MQTT). I handle both frontend and on-device logic.",
            stats: { years: "Years of experience", projects: "Completed projects", clients: "Satisfied clients" }
        },
        testimonials: {
            title: "What clients say",
            subtitle: "Testimonials from people I had the pleasure to work with",
            list: [
                { text: "Casper did an EXCEPTIONAL job on my project! His code was polished, bug-free, and showed his deep knowledge. Moreover, his quick delivery and collaborative spirit made working with him a pleasure.", author: "Johann Schwarz", position: "Germany" },
                { text: "Casper is a fantastic person to work with! The fact that he is so young is a testament to how intelligent and capable he is. I am very impressed with the level of his work and professionalism. I highly recommend Casper if you're looking for well-done work before the deadline.", author: "Hansel Annie", position: "Canada" },
                { text: "Great collaboration, my requirements were difficult to explain, but thanks to Casper we achieved the intended result. Thank you again", author: "Roberto Buti", position: "Italy" }
            ]
        },
        whyMe: {
            title: "Why me?",
            features: [
                { number: "01", title: "Individual approach", description: "I treat each project as a unique challenge, adapting solutions to specific client needs." },
                { number: "02", title: "Modern technologies", description: "I use the latest tools and frameworks, ensuring performance and future-proof solutions." },
                { number: "03", title: "Timeliness", description: "I complete projects according to the established schedule, ensuring regular communication and updates." }
            ]
        },
        contact: {
            title: "Contact",
            subtitle: "Reach out directly.",
            form: { email: "Send email", linkedin: "LinkedIn", copyEmail: "Copy email" }
        },
        footer: { copyright: "© 2025 Kacper Stefański. All rights reserved." },
        blastgate: {
            title: "Dust Collection System Automation",
            subtitle: "Intelligent damper control system in dust collection system",
            tags: { automation: "Automation", nodeRed: "Node-RED", rpi: "RPI" },
            stats: { codeLines: "Lines of code", weeks: "Weeks of development", dampers: "Dampers" },
            projectHistory: {
                title: "Project History",
                part1: "The project began with a message on the Fiverr platform, where a client was looking for a specialist to implement an automation system. He already had complete hardware infrastructure - a dust collection system with servo-controlled dampers, but lacked the technical knowledge to program the control logic.",
                part2: "After initial needs analysis and consultations, we decided to use Node-RED as the control system implementation platform, due to its flexibility and ability to quickly prototype solutions."
            },
            components: {
                title: "System Components",
                mainController: { title: "Main Controller", desc: "Raspberry Pi 4 with Node-RED for system management" },
                dampers: { title: "Dampers", desc: "3 automatic dampers with 24V actuators" },
                sensors: { title: "Sensors", desc: "Current sensors for machine state detection" },
                interface: { title: "Interface", desc: "Control panel with LCD display and buttons" },
                power: { title: "Power Supply", desc: "Redundant power system with UPS" },
                safety: { title: "Safety", desc: "Safety system and pressure monitoring" }
            },
            troubleshooting: {
                title: "Problem and Solution",
                problem: "During system testing, we observed false readings from current sensors that could lead to incorrect machine state detection. The problem was caused by sporadic, short-term voltage drops that the system interpreted as device shutdown.",
                solution: "The solution was to introduce a measurement buffer and anomaly detection algorithm that:",
                steps: [
                    "Stores history of last 3 measurements",
                    "Calculates average from two previous readings",
                    "Compares current reading with previous average",
                    "Rejects suspicious readings when the difference is too large"
                ],
                implementation: "Implementation of this solution significantly improved system stability by eliminating false damper switching caused by measurement interference."
            },
            conclusions: {
                implementation: { title: "Effective Implementation of Complex Logic", description: "Despite the high complexity of the flow diagram, containing numerous states and transition conditions, we successfully transferred all logic to Node-RED. The project proved that even complex automation systems can be implemented in a clear and effective way using appropriate tools." },
                documentation: { title: "Documentation Practices Development", description: "During the project implementation, I significantly improved the approach to technical documentation. The introduction of detailed diagrams, clear system state descriptions, and code comments not only facilitated the development process but also ensured easier maintenance and potential system modifications in the future." },
                nextStep: { title: "Next Step in Automation Development", description: "The successful implementation of this project represents another important element in the development of the automation system. The experience gained and solutions developed will be valuable reference points for future automation projects." },
                keyAchievements: {
                    title: "Key Achievements:",
                    points: [
                        "Full automation of dust collection system",
                        "Complete technical documentation",
                        "Increased component lifetime through optimal control"
                    ]
                }
            },
            achievements: {
                title: "Key Achievements",
                points: [
                    "Full automation of dust collection system",
                    "Complete technical documentation",
                    "Increased component lifetime through optimal control"
                ]
            },
            sections: {
                projectOverview: "Project Overview",
                systemComponents: "System Components",
                mainFeatures: "Main Features",
                flowDiagram: "Flow Diagram",
                troubleshooting: "Code | Issues | Solutions",
                gallery: "Gallery",
                conclusions: "Conclusions and Results"
            },
            mainFeatures: {
                automaticControl: { title: "Automatic Control", desc: "System automatically detects machine states and adjusts dampers accordingly." },
                manualControl: { title: "Manual Control", desc: "Possibility of manual damper control through buttons." },
                safetyDelays: { title: "Safety Delays", desc: "Built-in time delays ensuring safe state transitions." }
            },
            diagram: { viewButton: "View full diagram", description: "The diagram shows the system's logic, including all states and transitions between them." },
            projectStats: {
                codeLines: { value: "💻 ~ 150", label: "Lines of code" },
                developmentTime: { value: "⏱️ 1", label: "Week of development" },
                clientRating: { value: "⭐ 5/5", label: "Client rating" }
            },
            code: { voltageDetection: "Voltage Anomaly Detection in Node-RED" }
        },
        nowadroga: {
            title: "Therapy Clinic Website",
            subtitle: "Professional website for Addiction and Co-dependency Treatment Center in Barlinek",
            projectOverview: "Project Overview",
            projectHistory: "Project History",
            historyText1: "The project began with a request to create a professional website for the \"Nowa Droga\" Addiction and Co-dependency Treatment Center in Barlinek. The client needed a modern website that would present her therapeutic activities in a clear way and build trust among potential patients.",
            historyText2: "After initial consultations and needs analysis, we decided to create a website that would combine professional appearance with ease of use and accessibility for all user groups, with particular emphasis on responsiveness on mobile devices.",
            keyElements: "Key Project Elements",
            components: {
                responsiveDesign: { title: "Responsive Design", desc: "Full optimization for mobile devices and various screen sizes" },
                userInterface: { title: "Intuitive Interface", desc: "Simple and clear layout for easy navigation" },
                content: { title: "Optimized Content", desc: "Professional texts tailored to the target group needs" },
                contactForm: { title: "Contact Form", desc: "Easy way of communication between clients and the clinic" },
                seo: { title: "SEO Optimization", desc: "Adapting the website to search engine requirements" },
                fastLoading: { title: "Fast Loading", desc: "Loading speed optimization for better user experience" }
            },
            mainFeatures: "Main Features",
            features: {
                presentation: { title: "Service Presentation", desc: "Clear presentation of clinic services and available forms of therapy." },
                aboutSection: { title: "About the Therapist", desc: "Building trust by presenting qualifications and experience of the therapist." },
                contactInfo: { title: "Contact Information", desc: "Easy access to contact details and clinic location." }
            },
            gallery: "Gallery",
            stats: { codeLines: "Lines of code", developmentTime: "Weeks of development", clientRating: "Client rating" }
        },
        gooseproduction: {
            title: "Goose Production – content pipeline",
            subtitle: "n8n system for trend aggregation, topic ranking, and content strategy generation for video",
            projectOverview: "Project overview",
            projectHistory: "About the project",
            historyPart1: "The project is a content production pipeline for video: two n8n workflows. The first (Trend Engine v2) aggregates and normalizes trends from Google Trends, YouTube, Google News, and Reddit based on keywords from Google Sheets. The second (Topic Ranking Engine v1) fetches raw topics, ranks them via an AI agent, and generates a full content strategy (titles, thumbnail text, script) for the best topic.",
            historyPart2: "Data flows through sheets: raw_topics → ranked_topics → selected_topic. Triggers: schedule (e.g. every 3 days) or manual. AI models (e.g. 4o-mini) can be swapped for quality and cost tuning.",
            trendEngine: "Trend Engine v2",
            trendEngineDesc: "Reads keywords from Google Sheets and runs four parallel branches (Google Trends, YouTube, Google News, Reddit). Each branch iterates over keywords, calls the relevant API (SerpAPI, YouTube Search), normalizes results to a common format, and appends rows to raw_topics (timestamp, source, topic, url, score 0–100, processed=false). Trigger: manual or schedule (e.g. every 3 days). Limits: SerpAPI 250/month, 2–3 day freshness filters for YouTube/Reddit.",
            topicRanking: "Topic Ranking Engine v1",
            topicRankingDesc: "Fetches unprocessed records from raw_topics (processed=false), filters by freshness and score, applies source weighting. Agent 1 (ranking) receives 30–120 topics and returns top 20 with scores (trend_strength, relevance, impact, competition, final_score) and reasoning; output is saved to ranked_topics and records marked processed. Agent 2 (content) uses ranked_topics to generate the strategy: chosen topic, video ideas, title options, thumbnail texts (3–4 words, ALL CAPS, max 25 chars), full script. Output with timestamp is written to selected_topic.",
            workflowDiagrams: "Workflow diagrams",
            dataFlow: "Data flow",
            dataFlowText: "Keywords (Sheets) → Trend Engine → raw_topics → Topic Ranking Engine → ranked_topics → Agent 2 → selected_topic. Stack: n8n, Google Sheets, SerpAPI, YouTube API, Reddit, LLM (e.g. OpenAI 4o-mini).",
            techStack: "Stack",
            conclusions: "Conclusions",
            conclusionsText: "The pipeline demonstrates combining multi-source data collection, normalization, AI agent ranking, and full content strategy generation in a single n8n system with state stored in Google Sheets.",
            viewDiagram: "View full diagram"
        }
    }
};

window.getI18n = function (key, lang) {
    if (!window.I18N || !window.I18N[lang]) return null;
    var parts = key.split(".");
    var v = window.I18N[lang];
    for (var i = 0; i < parts.length; i++) {
        if (v == null || v === undefined) return null;
        v = v[parts[i]];
    }
    return typeof v === "string" ? v : (Array.isArray(v) ? v : (v && typeof v === "object" ? v : null));
};

function updateProjectLinks(lang) {
    if (!window.I18N || !window.I18N[lang] || !window.I18N[lang].portfolio || !window.I18N[lang].portfolio.projects) return;
    var projects = window.I18N[lang].portfolio.projects;
    document.querySelectorAll(".project-card[data-project]").forEach(function (card) {
        var id = card.getAttribute("data-project");
        var p = projects[id];
        if (!p) return;
        var detailsLink = card.querySelector(".link-details");
        if (detailsLink && p.detailsUrl) detailsLink.href = p.detailsUrl;
        var repoLink = card.querySelector(".link-repo");
        if (repoLink) {
            if (p.repoUrl) {
                repoLink.href = p.repoUrl;
                repoLink.style.display = "";
                repoLink.textContent = p.repo || "Repo";
            } else repoLink.style.display = "none";
        }
        var liveLink = card.querySelector(".link-live");
        if (liveLink) {
            if (p.liveUrl) {
                liveLink.href = p.liveUrl;
                liveLink.target = "_blank";
                liveLink.rel = "noopener";
                liveLink.style.display = "";
                liveLink.textContent = p.live || "Live";
            } else liveLink.style.display = "none";
        }
    });
}

window.applyTranslations = function (lang, scope) {
    if (!lang || !scope) return;
    var g = function (key, l) { return window.getI18n(key, l); };
    document.documentElement.lang = lang === "en" ? "en" : "pl";
    try { localStorage.setItem("selectedLanguage", lang); } catch (e) {}

    if (scope === "home") {
        document.querySelectorAll("[data-translate]").forEach(function (el) {
            var key = el.getAttribute("data-translate");
            var text = g(key, lang);
            if (typeof text === "string") el.textContent = text;
        });
        updateProjectLinks(lang);
        return;
    }

    if (scope === "blastgate") {
        var b = function (key, l) { return g("blastgate." + key, l); };
        var el;
        el = document.querySelector("h1");
        if (el) el.textContent = b("title", lang) || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = b("subtitle", lang) || el.textContent;
        var h3s = document.querySelectorAll(".overview-item h3");
        if (h3s.length) h3s[0].textContent = b("projectHistory.title", lang) || h3s[0].textContent;
        var historyPs = document.querySelectorAll(".overview-item p");
        if (historyPs.length >= 2) {
            historyPs[0].textContent = b("projectHistory.part1", lang) || historyPs[0].textContent;
            historyPs[1].textContent = b("projectHistory.part2", lang) || historyPs[1].textContent;
        }
        document.querySelectorAll(".component-card").forEach(function (card) {
            var key = card.getAttribute("data-component");
            if (!key) return;
            var title = b("components." + key + ".title", lang);
            var desc = b("components." + key + ".desc", lang);
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        document.querySelectorAll("[data-section]").forEach(function (e) {
            var key = e.getAttribute("data-section");
            if (!key) return;
            var text = b("sections." + key, lang);
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-tag]").forEach(function (e) {
            var text = b("tags." + e.getAttribute("data-tag"), lang);
            if (text) e.textContent = text;
        });
        document.querySelectorAll(".stat-item").forEach(function (item) {
            var key = item.getAttribute("data-stat");
            if (!key) return;
            var val = b("projectStats." + key + ".value", lang);
            var label = b("projectStats." + key + ".label", lang);
            if (val && item.querySelector(".stat-value")) item.querySelector(".stat-value").textContent = val;
            if (label && item.querySelector(".stat-label")) item.querySelector(".stat-label").textContent = label;
        });
        document.querySelectorAll(".feature-card").forEach(function (card) {
            var key = card.getAttribute("data-feature");
            if (!key) return;
            var title = b("mainFeatures." + key + ".title", lang);
            var desc = b("mainFeatures." + key + ".desc", lang);
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        document.querySelectorAll("[data-diagram]").forEach(function (e) {
            var text = b("diagram." + e.getAttribute("data-diagram"), lang);
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = b(key, lang) || g(key, lang);
            if (typeof text === "string") e.textContent = text;
        });
        document.querySelectorAll(".achievement-item p").forEach(function (p, i) {
            var text = b("achievements.points." + i, lang);
            if (text) p.textContent = text;
        });
        return;
    }

    if (scope === "nowadroga") {
        var n = function (key, l) { return g("nowadroga." + key, l); };
        var el;
        el = document.querySelector(".project-header h1");
        if (el) el.textContent = n("title", lang) || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = n("subtitle", lang) || el.textContent;
        el = document.querySelector("[data-section=\"projectOverview\"]");
        if (el) el.textContent = n("projectOverview", lang) || el.textContent;
        var overviewH3 = document.querySelector(".overview-item h3");
        if (overviewH3) overviewH3.textContent = n("projectHistory", lang) || overviewH3.textContent;
        var historyPs = document.querySelectorAll(".overview-item p");
        if (historyPs.length >= 2) {
            historyPs[0].textContent = n("historyText1", lang) || historyPs[0].textContent;
            historyPs[1].textContent = n("historyText2", lang) || historyPs[1].textContent;
        }
        el = document.querySelector("[data-section=\"keyElements\"]");
        if (el) el.textContent = n("keyElements", lang) || el.textContent;
        ["responsiveDesign", "userInterface", "content", "contactForm", "seo", "fastLoading"].forEach(function (key) {
            var card = document.querySelector("[data-component=\"" + key + "\"]");
            if (!card) return;
            var title = n("components." + key + ".title", lang);
            var desc = n("components." + key + ".desc", lang);
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        el = document.querySelector("[data-section=\"mainFeatures\"]");
        if (el) el.textContent = n("mainFeatures", lang) || el.textContent;
        ["presentation", "aboutSection", "contactInfo"].forEach(function (key) {
            var card = document.querySelector("[data-feature=\"" + key + "\"]");
            if (!card) return;
            var title = n("features." + key + ".title", lang);
            var desc = n("features." + key + ".desc", lang);
            if (title && card.querySelector("h3")) card.querySelector("h3").textContent = title;
            if (desc && card.querySelector("p")) card.querySelector("p").textContent = desc;
        });
        el = document.querySelector("[data-section=\"gallery\"]");
        if (el) el.textContent = n("gallery", lang) || el.textContent;
        document.querySelectorAll(".stat-item").forEach(function (item) {
            var key = item.getAttribute("data-stat");
            if (!key) return;
            var label = n("stats." + key, lang);
            if (label && item.querySelector(".stat-label")) item.querySelector(".stat-label").textContent = label;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = n(key, lang) || g(key, lang);
            if (typeof text === "string") e.textContent = text;
        });
        return;
    }

    if (scope === "gooseproduction") {
        var o = function (key, l) { return g("gooseproduction." + key, l); };
        var el;
        el = document.querySelector(".project-header h1");
        if (el) el.textContent = o("title", lang) || el.textContent;
        el = document.querySelector(".project-subtitle");
        if (el) el.textContent = o("subtitle", lang) || el.textContent;
        document.querySelectorAll("[data-section]").forEach(function (e) {
            var key = e.getAttribute("data-section");
            if (!key) return;
            var text = o(key, lang);
            if (text) e.textContent = text;
        });
        document.querySelectorAll("[data-translate]").forEach(function (e) {
            var key = e.getAttribute("data-translate");
            var text = (key && key.indexOf("gooseproduction.") === 0) ? g(key, lang) : o(key, lang);
            if (typeof text === "string") e.textContent = text;
        });
    }
};
