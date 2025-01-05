// Inicjalizacja highlight.js
document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});

// Obsługa galerii i lightboxa
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    let currentImageIndex = 0;

    // Funkcja otwierająca lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        const imgSrc = galleryImages[index].src;
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Funkcja zamykająca lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Funkcja pokazująca następne zdjęcie
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
    }

    // Funkcja pokazująca poprzednie zdjęcie
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
    }

    // Dodanie event listenerów
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Zamykanie lightboxa po kliknięciu poza zdjęciem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Obsługa klawiszy
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
});

// Tłumaczenia dla tej strony
const projectTranslations = {
    pl: {
        title: 'System automatyzacji domu',
        subtitle: 'Kompleksowy system zarządzania inteligentnym domem oparty o Home Assistant',
        overview: {
            title: 'Przegląd projektu',
            goal: 'Cel projektu',
            technologies: 'Technologie'
        },
        features: {
            title: 'Główne funkcje',
            lighting: 'Inteligentne oświetlenie',
            climate: 'Kontrola klimatu',
            security: 'System bezpieczeństwa'
        },
        implementation: 'Implementacja',
        gallery: 'Galeria',
        conclusions: 'Wnioski i rezultaty',
        demo: 'Demo',
        blastgate: {
            title: 'System Automatyzacji Odciągu Trocin',
            states: {
                title: 'Stany Systemu',
                status0: 'Tryb czuwania',
                status1: 'Piła i strugarka włączone',
                status2: 'Tylko piła włączona',
                status3: 'Tylko strugarka włączona',
                status4: 'Okres wybiegu',
                status99: 'Sterowanie manualne'
            },
            simulator: {
                saw: 'Piła',
                planer: 'Strugarka',
                collector: 'Odciąg',
                gate1: 'Przepustnica 1',
                gate2: 'Przepustnica 2',
                gate3: 'Przepustnica 3'
            }
        }
    },
    en: {
        title: 'Home Automation System',
        subtitle: 'Comprehensive smart home management system based on Home Assistant',
        overview: {
            title: 'Project Overview',
            goal: 'Project Goal',
            technologies: 'Technologies'
        },
        features: {
            title: 'Key Features',
            lighting: 'Smart Lighting',
            climate: 'Climate Control',
            security: 'Security System'
        },
        implementation: 'Implementation',
        gallery: 'Gallery',
        conclusions: 'Conclusions and Results',
        demo: 'Demo'
    }
}; 

const translations = {
    pl: {
        // Nagłówek
        title: "System automatyzacji odciągu wiórów",
        subtitle: "Inteligentny system sterowania przepustnicami w systemie odciągu wiórów",
        
        // Tagi
        tags: {
            automation: "Automatyka",
            nodeRed: "Node-RED",
            rpi: "RPI"
        },

        // Statystyki
        stats: {
            codeLines: "Linijek kodu",
            weeks: "Tygodnie realizacji",
            dampers: "Przepustnice"
        },

        // Historia projektu
        projectHistory: {
            title: "Historia projektu",
            part1: "Projekt rozpoczął się od wiadomości na platformie Fiverr, gdzie klient poszukiwał specjalisty do implementacji systemu automatyki. Posiadał już kompletną infrastrukturę sprzętową - system odciągu wiórów z przepustnicami sterowanymi serwomechanizmami, ale brakowało mu wiedzy technicznej do zaprogramowania logiki sterowania.",
            part2: "Po wstępnej analizie potrzeb i konsultacjach, zdecydowaliśmy się na wykorzystanie Node-RED jako platformy do implementacji systemu sterowania, ze względu na jego elastyczność i możliwość szybkiego prototypowania rozwiązań."
        },

        // Komponenty systemu
        components: {
            title: "Komponenty systemu",
            mainController: {
                title: "Sterownik główny",
                desc: "Raspberry Pi 4 z Node-RED do zarządzania systemem"
            },
            dampers: {
                title: "Przepustnice",
                desc: "3 automatyczne przepustnice z siłownikami 24V"
            },
            sensors: {
                title: "Czujniki",
                desc: "Sensory prądu do wykrywania stanu maszyn"
            },
            interface: {
                title: "Interfejs",
                desc: "Panel sterowania z wyświetlaczem LCD i przyciskami"
            },
            power: {
                title: "Zasilanie",
                desc: "Redundantny system zasilania z UPS"
            },
            safety: {
                title: "Bezpieczeństwo",
                desc: "System zabezpieczeń i monitoring ciśnienia"
            }
        },

        // Kod i problemy
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

        // Wnioski i rezultaty
        conclusions: {
            implementation: {
                title: "Skuteczna implementacja złożonej logiki",
                description: "Mimo wysokiego stopnia skomplikowania diagramu przepływu, zawierającego liczne stany i warunki przejściowe, udało się skutecznie przenieść całą logikę do Node-RED. Projekt udowodnił, że nawet złożone systemy automatyki można zaimplementować w sposób przejrzysty i efektywny przy użyciu odpowiednich narzędzi."
            },
            documentation: {
                title: "Rozwój praktyk dokumentacyjnych",
                description: "W trakcie realizacji projektu znacząco udoskonaliłem podejście do tworzenia dokumentacji technicznej. Wprowadzenie szczegółowych diagramów, przejrzystych opisów stanów systemu oraz komentarzy w kodzie nie tylko ułatwiło proces rozwoju, ale również zapewniło łatwiejszą konserwację i potencjalne modyfikacje systemu w przyszłości."
            },
            nextStep: {
                title: "Kolejny krok w rozwoju automatyki",
                description: "Pomyślna realizacja tego projektu stanowi kolejny ważny element w rozwoju systemu automatyki. Zdobyte doświadczenie oraz wypracowane rozwiązania będą cennym punktem odniesienia przy realizacji przyszłych projektów automatyzacji."
            },
            keyAchievements: {
                title: "Kluczowe osiągnięcia:",
                points: [
                    "Pełna automatyzacja systemu odciągu wiórów",
                    "Kompletna dokumentacja techniczna",
                    "Zwiększenie żywotności komponentów poprzez optymalne sterowanie"
                ]
            }
        },

        // Kluczowe osiągnięcia
        achievements: {
            title: "Kluczowe osiągnięcia",
            points: [
                "Pełne zautomatyzowanie systemu odciągu wiórów",
                "Pełna dokumentacja techniczna systemu",
                "Zwiększenie żywotności komponentów poprzez optymalne sterowanie"
            ]
        },

        headers: {
            projectOverview: "Przegląd projektu",
            mainFeatures: "Główne funkcje",
            flowDiagram: "Diagram przepływu",
            codeProblems: "Kody | Problemy | Rozwiązania",
            gallery: "Galeria",
            conclusionsResults: "Wnioski i rezultaty"
        },
        
        buttons: {
            viewFullDiagram: "Zobacz pełny diagram",
        },

        diagramDescription: "Diagram przedstawia kompletny przepływ danych i logikę sterowania systemem, uwzględniając wszystkie stany i warunki przejściowe.",

        problemSolution: {
            title: "Problem i rozwiązanie",
            problem: "Podczas testów systemu zaobserwowaliśmy fałszywe odczyty z czujników prądu, które mogły prowadzić do nieprawidłowego wykrywania stanu maszyn. Problem polegał na sporadycznych, krótkotrwałych spadkach napięcia, które system interpretował jako wyłączenie urządzenia.",
            solution: "Rozwiązaniem było wprowadzenie bufora pomiarów i algorytmu wykrywania anomalii, który:",
            solutionPoints: [
                "Przechowuje historię ostatnich 3 pomiarów",
                "Oblicza średnią z dwóch poprzednich odczytów",
                "Porównuje bieżący odczyt ze średnią poprzednich",
                "Odrzuca podejrzane odczyty, gdy różnica jest zbyt duża"
            ],
            implementation: "Implementacja tego rozwiązania znacząco poprawiła stabilność systemu, eliminując fałszywe przełączenia przepustnic spowodowane zakłóceniami w pomiarach."
        },

        projectStats: {
            codeLines: {
                value: "💻 ~ 150",
                label: "Linijek kodu"
            },
            developmentTime: {
                value: "⏱️ 1",
                label: "Tydzień realizacji"
            },
            clientRating: {
                value: "⭐ 5/5",
                label: "Ocena klienta"
            }
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
            automaticControl: {
                title: "Automatyczne sterowanie",
                desc: "System automatycznie wykrywa stan maszyn i dostosowuje przepustnice."
            },
            manualControl: {
                title: "Sterowanie ręczne",
                desc: "Możliwość manualnego sterowania przepustnicami poprzez przyciski."
            },
            safetyDelays: {
                title: "Opóźnienia bezpieczeństwa",
                desc: "Wbudowane opóźnienia czasowe zapewniające bezpieczne przełączanie stanów."
            }
        },

        diagram: {
            viewButton: "Zobacz pełny diagram",
            description: "Diagram przedstawia logikę działania systemu, włączając wszystkie stany i przejścia między nimi."
        },

        troubleshootingSection: {
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

        code: {
            voltageDetection: "Wykrywanie anomalii napięcia w Node-RED"
        }
    },
    
    en: {
        // Header
        title: "Dust Collection System Automation",
        subtitle: "Intelligent damper control system in dust collection system",
        
        // Tags
        tags: {
            automation: "Automation",
            nodeRed: "Node-RED",
            rpi: "RPI"
        },

        // Stats
        stats: {
            codeLines: "Lines of code",
            weeks: "Weeks of development",
            dampers: "Dampers"
        },

        // Project History
        projectHistory: {
            title: "Project History",
            part1: "The project began with a message on the Fiverr platform, where a client was looking for a specialist to implement an automation system. He already had complete hardware infrastructure - a dust collection system with servo-controlled dampers, but lacked the technical knowledge to program the control logic.",
            part2: "After initial needs analysis and consultations, we decided to use Node-RED as the control system implementation platform, due to its flexibility and ability to quickly prototype solutions."
        },

        // System Components
        components: {
            title: "System Components",
            mainController: {
                title: "Main Controller",
                desc: "Raspberry Pi 4 with Node-RED for system management"
            },
            dampers: {
                title: "Dampers",
                desc: "3 automatic dampers with 24V actuators"
            },
            sensors: {
                title: "Sensors",
                desc: "Current sensors for machine state detection"
            },
            interface: {
                title: "Interface",
                desc: "Control panel with LCD display and buttons"
            },
            power: {
                title: "Power Supply",
                desc: "Redundant power system with UPS"
            },
            safety: {
                title: "Safety",
                desc: "Safety system and pressure monitoring"
            }
        },

        // Code and Problems
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

        // Conclusions and Results
        conclusions: {
            implementation: {
                title: "Effective Implementation of Complex Logic",
                description: "Despite the high complexity of the flow diagram, containing numerous states and transition conditions, we successfully transferred all logic to Node-RED. The project proved that even complex automation systems can be implemented in a clear and effective way using appropriate tools."
            },
            documentation: {
                title: "Documentation Practices Development",
                description: "During the project implementation, I significantly improved the approach to technical documentation. The introduction of detailed diagrams, clear system state descriptions, and code comments not only facilitated the development process but also ensured easier maintenance and potential system modifications in the future."
            },
            nextStep: {
                title: "Next Step in Automation Development",
                description: "The successful implementation of this project represents another important element in the development of the automation system. The experience gained and solutions developed will be valuable reference points for future automation projects."
            },
            keyAchievements: {
                title: "Key Achievements:",
                points: [
                    "Full automation of dust collection system",
                    "Complete technical documentation",
                    "Increased component lifetime through optimal control"
                ]
            }
        },

        // Key Achievements
        achievements: {
            title: "Key Achievements",
            points: [
                "Full automation of dust collection system",
                "Complete technical documentation",
                "Increased component lifetime through optimal control"
            ]
        },

        headers: {
            projectOverview: "Project Overview",
            mainFeatures: "Main Features",
            flowDiagram: "Flow Diagram",
            codeProblems: "Code | Problems | Solutions",
            gallery: "Gallery",
            conclusionsResults: "Conclusions and Results"
        },
        
        buttons: {
            viewFullDiagram: "View full diagram",
        },

        diagramDescription: "The diagram shows complete data flow and system control logic, including all states and transition conditions.",

        problemSolution: {
            title: "Problem and Solution",
            problem: "During system testing, we observed false readings from current sensors that could lead to incorrect machine state detection. The problem was caused by sporadic, short-term voltage drops that the system interpreted as device shutdown.",
            solution: "The solution was to introduce a measurement buffer and anomaly detection algorithm that:",
            solutionPoints: [
                "Stores history of last 3 measurements",
                "Calculates average from two previous readings",
                "Compares current reading with previous average",
                "Rejects suspicious readings when the difference is too large"
            ],
            implementation: "Implementation of this solution significantly improved system stability by eliminating false damper switching caused by measurement interference."
        },

        projectStats: {
            codeLines: {
                value: "💻 ~ 150",
                label: "Lines of code"
            },
            developmentTime: {
                value: "⏱️ 1",
                label: "Week of development"
            },
            clientRating: {
                value: "⭐ 5/5",
                label: "Client rating"
            }
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
            automaticControl: {
                title: "Automatic Control",
                desc: "System automatically detects machine states and adjusts dampers accordingly."
            },
            manualControl: {
                title: "Manual Control",
                desc: "Possibility of manual damper control through buttons."
            },
            safetyDelays: {
                title: "Safety Delays",
                desc: "Built-in time delays ensuring safe state transitions."
            }
        },

        diagram: {
            viewButton: "View full diagram",
            description: "The diagram shows the system's logic, including all states and transitions between them."
        },

        troubleshootingSection: {
            title: "Issue and Solution",
            problem: "During system testing, we observed false readings from current sensors that could lead to incorrect machine state detection. The issue was caused by sporadic, short-term voltage drops that the system interpreted as device shutdown.",
            solution: "The solution was to introduce a measurement buffer and anomaly detection algorithm that:",
            steps: [
                "Stores history of last 3 measurements",
                "Calculates average from two previous readings",
                "Compares current reading with previous average",
                "Rejects suspicious readings when the difference is too large"
            ],
            implementation: "Implementation of this solution significantly improved system stability by eliminating false damper switching caused by measurement interference."
        },

        code: {
            voltageDetection: "Voltage Anomaly Detection in Node-RED"
        }
    }
};

function updateContent(lang) {
    console.log('Updating content to:', lang);
    const content = translations[lang];

    // Debugowanie - sprawdźmy wszystkie znalezione elementy
    console.log('Found sections:', document.querySelectorAll('[data-section]'));

    // Bezpośrednia aktualizacja nagłówka komponentów
    const componentsHeader = document.querySelector('h2[data-section="systemComponents"]');
    console.log('Components header found:', componentsHeader); // Sprawdźmy czy znajduje element
    
    if (componentsHeader && content.sections.systemComponents) {
        console.log('Updating components header to:', content.sections.systemComponents);
        componentsHeader.textContent = content.sections.systemComponents;
    }

    // Funkcja pomocnicza do bezpiecznej aktualizacji elementu
    const safeUpdateElement = (selector, updateFn) => {
        const element = document.querySelector(selector);
        if (element) {
            updateFn(element);
        }
    };

    // Aktualizacja głównych sekcji
    safeUpdateElement('h1', el => el.textContent = content.title);
    safeUpdateElement('.project-subtitle', el => el.textContent = content.subtitle);

    // Aktualizacja historii projektu
    safeUpdateElement('.overview-item h3', el => el.textContent = content.projectHistory.title);
    
    const historyParagraphs = document.querySelectorAll('.overview-item p');
    if (historyParagraphs.length >= 2) {
        historyParagraphs[0].textContent = content.projectHistory.part1;
        historyParagraphs[1].textContent = content.projectHistory.part2;
    }

    // Aktualizacja komponentów
    document.querySelectorAll('.component-card').forEach(card => {
        const componentKey = card.getAttribute('data-component');
        if (componentKey && content.components[componentKey]) {
            const component = content.components[componentKey];
            card.querySelector('h3').textContent = component.title;
            card.querySelector('p').textContent = component.desc;
        }
    });

    // Aktualizacja nagłówka sekcji komponentów
    const componentTitle = document.querySelector('[data-section="components"]');
    if (componentTitle) {
        componentTitle.textContent = content.components.title;
    }

    // Aktualizacja statystyk
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels.forEach(stat => {
        const key = stat.getAttribute('data-stat');
        if (key && content.stats[key]) {
            stat.textContent = content.stats[key];
        }
    });

    // Aktualizacja elementów z tłumaczeniami
    document.querySelectorAll('[data-translate]').forEach(element => {
        const translateKey = element.getAttribute('data-translate');
        const keys = translateKey.split('.');
        let translation = translations[lang];
        
        for (const key of keys) {
            if (translation && (Array.isArray(translation) || typeof translation === 'object')) {
                translation = translation[key];
            }
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });

    // Aktualizacja osiągnięć
    const achievementItems = document.querySelectorAll('.achievement-item p');
    achievementItems.forEach((item, index) => {
        if (content.achievements.points[index]) {
            item.textContent = content.achievements.points[index];
        }
    });

    // Aktualizacja statystyk projektu
    document.querySelectorAll('.stat-item').forEach(item => {
        const statKey = item.getAttribute('data-stat');
        if (statKey && translations[lang].projectStats[statKey]) {
            const stat = translations[lang].projectStats[statKey];
            item.querySelector('.stat-value').textContent = stat.value;
            item.querySelector('.stat-label').textContent = stat.label;
        }
    });

    // Aktualizacja nagłówków sekcji
    document.querySelectorAll('[data-section]').forEach(element => {
        const sectionKey = element.getAttribute('data-section');
        console.log('Updating section:', sectionKey);
        if (sectionKey && content.sections[sectionKey]) {
            element.textContent = content.sections[sectionKey];
            console.log('New content:', content.sections[sectionKey]);
        }
    });

    // Aktualizacja tagów
    document.querySelectorAll('[data-tag]').forEach(tag => {
        const tagKey = tag.getAttribute('data-tag');
        if (tagKey && translations[lang].tags[tagKey]) {
            tag.textContent = translations[lang].tags[tagKey];
        }
    });

    // Aktualizacja głównych funkcji
    document.querySelectorAll('.feature-card').forEach(card => {
        const featureKey = card.getAttribute('data-feature');
        if (featureKey && translations[lang].mainFeatures[featureKey]) {
            const feature = translations[lang].mainFeatures[featureKey];
            card.querySelector('h3').textContent = feature.title;
            card.querySelector('p').textContent = feature.desc;
        }
    });

    // Aktualizacja elementów diagramu
    document.querySelectorAll('[data-diagram]').forEach(element => {
        const diagramKey = element.getAttribute('data-diagram');
        if (diagramKey && translations[lang].diagram[diagramKey]) {
            element.textContent = translations[lang].diagram[diagramKey];
        }
    });

    // Zapisanie wybranego języka
    localStorage.setItem('selectedLanguage', lang);
    console.log('Content updated successfully');
}

// Obsługa przycisków języka
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pl';
    console.log('Saved language:', savedLanguage);

    // Ustaw początkowy język
    updateContent(savedLanguage);
    
    // Dodaj obsługę kliknięć
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Language button clicked:', btn.dataset.lang);
            const lang = btn.dataset.lang;
            
            // Aktualizacja aktywnego przycisku
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Zmiana języka
            updateContent(lang);
        });
    });
}); 

// Obsługa menu mobilnego
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Zamykanie menu po kliknięciu w link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
}); 
