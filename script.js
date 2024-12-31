// Dodaj na początku pliku script.js
const translations = {
    pl: {
        nav: {
            home: 'Strona główna',
            portfolio: 'Portfolio',
            about: 'O mnie',
            testimonials: 'Opinie',
            contact: 'Kontakt'
        },
        hero: {
            greeting: 'Cześć, jestem',
            name: 'Kacper',
            subtitle: 'Developer | Biznesmen | Freelancer',
            cta: 'Umów się na spotkanie 💻'
        },
        about: {
            title: 'O mnie',
            // dodaj więcej tłumaczeń dla sekcji O mnie
        },
        testimonials: {
            title: 'Co mówią klienci',
            subtitle: 'Opinie osób, z którymi miałem przyjemność współpracować'
        },
        contact: {
            title: 'Umów spotkanie',
            subtitle: 'Porozmawiajmy o Twoim projekcie. Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin.',
            name: 'Imię i nazwisko',
            email: 'Email',
            message: 'Wiadomość',
            submit: 'Wyślij wiadomość →'
        }
    },
    en: {
        nav: {
            home: 'Home',
            portfolio: 'Portfolio',
            about: 'About',
            testimonials: 'Testimonials',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi, I\'m',
            name: 'Kacper',
            subtitle: 'Developer | Businessman | Freelancer',
            cta: 'Schedule a meeting 💻'
        },
        about: {
            title: 'About me',
            // dodaj więcej tłumaczeń dla sekcji About
        },
        testimonials: {
            title: 'What clients say',
            subtitle: 'Testimonials from people I had the pleasure to work with'
        },
        contact: {
            title: 'Schedule a meeting',
            subtitle: 'Let\'s talk about your project. Fill out the form and I\'ll get back to you within 24 hours.',
            name: 'Full name',
            email: 'Email',
            message: 'Message',
            submit: 'Send message →'
        }
    }
};

// Funkcja do ustawiania języka
function setLanguage() {
    // Sprawdź zapisaną preferencję języka
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const lang = savedLang || (browserLang === 'pl' ? 'pl' : 'en');
    
    // Ustaw aktywny przycisk
    document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');
    
    document.documentElement.lang = lang;
    updateTexts(lang);
}

// Funkcja do aktualizacji tekstów
function updateTexts(lang) {
    const t = translations[lang];
    
    // Aktualizacja nawigacji
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-key');
        if (key) link.textContent = t.nav[key];
    });
    
    // Aktualizacja sekcji hero
    document.querySelector('.hero h1').innerHTML = 
        `${t.hero.greeting} <br>${t.hero.name}<span class="cursor">|</span>`;
    document.querySelector('.hero .subtitle').textContent = t.hero.subtitle;
    document.querySelector('.hero .cta-button').textContent = t.hero.cta;
    
    // Aktualizacja pozostałych sekcji
    // ... dodaj aktualizacje dla innych sekcji
}

// Wywołaj funkcję przy załadowaniu strony
document.addEventListener('DOMContentLoaded', setLanguage);

// Funkcja do śledzenia aktywnej sekcji
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activeSection() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // offset dla lepszego timingu
        const sectionId = section.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
                // Specjalny przypadek dla strony głównej
                if(sectionId === 'hero' && link.getAttribute('href') === '#') {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Nasłuchiwanie przewijania
window.addEventListener('scroll', activeSection);

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateTexts(lang);
        
        // Aktualizuj aktywny przycisk
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Zapisz preferencję języka
        localStorage.setItem('preferredLanguage', lang);
    });
});

// Dodaj na końcu pliku
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Zamykanie menu po kliknięciu w link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});
