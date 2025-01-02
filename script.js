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
        portfolio: {
            title: 'Portfolio',
            description: 'Moje najnowsze projekty'
        },
        about: {
            title: 'O mnie',
            description: 'Jestem programistą specjalizującym się w tworzeniu nowoczesnych aplikacji webowych i automatyzacji procesów. Moje podejście skupia się na dostarczaniu efektywnych i skalowalnych rozwiązań.',
            stats: {
                years: 'Lata doświadczenia',
                projects: 'Zrealizowanych projektów',
                clients: 'Zadowolonych klientów'
            }
        },
        testimonials: {
            title: 'Co mówią klienci',
            subtitle: 'Opinie osób, z którymi miałem przyjemność współpracować',
            testimonials: [
                {
                    text: 'Profesjonalne podejście i świetna komunikacja. Projekt został wykonany zgodnie z założeniami i w terminie. Polecam!',
                    author: 'Jan Kowalski',
                    position: 'CEO, TechFirm'
                },
                {
                    text: 'Świetna współpraca i doskonałe zrozumienie potrzeb klienta. Efekt końcowy przeszedł nasze oczekiwania.',
                    author: 'Anna Nowak',
                    position: 'Marketing Manager, StartupXYZ'
                },
                {
                    text: 'Innowacyjne podejście do projektu i bardzo dobra znajomość najnowszych technologii. Zdecydowanie polecam!',
                    author: 'Piotr Wiśniewski',
                    position: 'CTO, InnoTech'
                }
            ]
        },
        contact: {
            title: 'Umów spotkanie',
            subtitle: 'Porozmawiajmy o Twoim projekcie. Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin.',
            form: {
                name: 'Imię i nazwisko',
                email: 'Email',
                message: 'Wiadomość',
                submit: 'Wyślij wiadomość →'
            }
        },
        whyMe: {
            title: 'Dlaczego ja?',
            features: [
                {
                    number: '01',
                    title: 'Indywidualne podejście',
                    description: 'Każdy projekt traktuję jako unikalne wyzwanie, dostosowując rozwiązania do konkretnych potrzeb klienta.'
                },
                {
                    number: '02',
                    title: 'Nowoczesne technologie',
                    description: 'Wykorzystuję najnowsze narzędzia i frameworki, zapewniając wydajność i przyszłościowe rozwiązania.'
                },
                {
                    number: '03',
                    title: 'Terminowość',
                    description: 'Projekty realizuję zgodnie z ustalonym harmonogramem, zapewniając regularną komunikację i aktualizacje.'
                }
            ]
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
        portfolio: {
            title: 'Portfolio',
            description: 'My latest projects'
        },
        about: {
            title: 'About',
            description: 'I am a programmer specializing in creating modern web applications and process automation. My approach focuses on delivering effective and scalable solutions.',
            stats: {
                years: 'Years of experience',
                projects: 'Completed projects',
                clients: 'Satisfied clients'
            }
        },
        testimonials: {
            title: 'What clients say',
            subtitle: 'Testimonials from people I had the pleasure to work with',
            testimonials: [
                {
                    text: 'Professional approach and great communication. The project was completed according to requirements and on time. I recommend!',
                    author: 'John Smith',
                    position: 'CEO, TechFirm'
                },
                {
                    text: 'Great cooperation and excellent understanding of client needs. The final result exceeded our expectations.',
                    author: 'Anna Smith',
                    position: 'Marketing Manager, StartupXYZ'
                },
                {
                    text: 'Innovative approach to the project and very good knowledge of the latest technologies. Definitely recommend!',
                    author: 'Peter Wilson',
                    position: 'CTO, InnoTech'
                }
            ]
        },
        contact: {
            title: 'Schedule a meeting',
            subtitle: 'Let\'s talk about your project. Fill out the form, and I\'ll contact you within 24 hours.',
            form: {
                name: 'Full name',
                email: 'Email',
                message: 'Message',
                submit: 'Send message →'
            }
        },
        whyMe: {
            title: 'Why me?',
            features: [
                {
                    number: '01',
                    title: 'Individual approach',
                    description: 'I treat each project as a unique challenge, tailoring solutions to specific client needs.'
                },
                {
                    number: '02',
                    title: 'Modern technologies',
                    description: 'I use the latest tools and frameworks, ensuring efficiency and future-proof solutions.'
                },
                {
                    number: '03',
                    title: 'Timeliness',
                    description: 'I complete projects according to the established schedule, ensuring regular communication and updates.'
                }
            ]
        }
    }
};

// Funkcja do zmiany języka
function changeLanguage(lang) {
    const t = translations[lang];
    
    // Aktualizacja nawigacji
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (key && t.nav[key]) {
            element.textContent = t.nav[key];
        }
    });
    
    // Aktualizacja sekcji hero
    document.querySelector('.hero h1').innerHTML = 
        `${t.hero.greeting} <br>${t.hero.name}<span class="cursor">|</span>`;
    document.querySelector('.hero .subtitle').textContent = t.hero.subtitle;
    document.querySelector('.cta-button').textContent = t.hero.cta;
    
    // Aktualizacja pozostałych sekcji
    Object.keys(t).forEach(section => {
        if (section === 'nav' || section === 'hero') return;
        
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const titleElement = sectionElement.querySelector('h2');
            const descElement = sectionElement.querySelector('.section-description');
            
            if (titleElement) titleElement.textContent = t[section].title;
            if (descElement) descElement.textContent = t[section].description;
        }
    });
    
    // Aktualizacja sekcji About
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.querySelector('h2').textContent = t.about.title;
        aboutSection.querySelector('p').textContent = t.about.description;
        
        // Aktualizacja statystyk
        const statsLabels = aboutSection.querySelectorAll('.stat-label');
        statsLabels.forEach(label => {
            const key = label.getAttribute('data-stat');
            if (key && t.about.stats[key]) {
                label.textContent = t.about.stats[key];
            }
        });
    }
    
    // Aktualizacja sekcji testimonials
    const testimonialsSection = document.getElementById('opinie');
    if (testimonialsSection) {
        // Aktualizacja tytułu i podtytułu
        testimonialsSection.querySelector('h2').textContent = t.testimonials.title;
        testimonialsSection.querySelector('.section-subtitle').textContent = t.testimonials.subtitle;
        
        // Aktualizacja testimoniali
        const testimonialCards = testimonialsSection.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            const testimonial = t.testimonials.testimonials[index];
            if (testimonial) {
                card.querySelector('.testimonial-text').textContent = `"${testimonial.text}"`;
                card.querySelector('.testimonial-author h3').textContent = testimonial.author;
                card.querySelector('.testimonial-author p').textContent = testimonial.position;
            }
        });
    }
    
    // Aktualizacja sekcji "Dlaczego ja?"
    const whyMeSection = document.getElementById('why-me');
    if (whyMeSection) {
        whyMeSection.querySelector('h2').textContent = t.whyMe.title;
        
        const features = whyMeSection.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            const featureData = t.whyMe.features[index];
            feature.querySelector('h3').textContent = featureData.title;
            feature.querySelector('p').textContent = featureData.description;
        });
    }
    
    // Aktualizacja sekcji kontaktowej
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
        contactSection.querySelector('h2').textContent = t.contact.title;
        contactSection.querySelector('.section-subtitle').textContent = t.contact.subtitle;
        
        const form = contactSection.querySelector('form');
        form.querySelector('label[for="name"]').textContent = t.contact.form.name;
        form.querySelector('label[for="email"]').textContent = t.contact.form.email;
        form.querySelector('label[for="message"]').textContent = t.contact.form.message;
        form.querySelector('.submit-btn').textContent = t.contact.form.submit;
    }
    
    // Zapisz preferencję języka
    localStorage.setItem('preferredLanguage', lang);
    
    // Aktualizuj aktywny przycisk języka
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Nasłuchiwanie kliknięć w przyciski języka
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Ustaw język przy załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (browserLang === 'pl' ? 'pl' : 'en');
    
    changeLanguage(initialLang);
});

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
