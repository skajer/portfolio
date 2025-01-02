// Inicjalizacja highlight.js
document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
});

// Obsługa galerii
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        // Tu można dodać lightbox dla zdjęć
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