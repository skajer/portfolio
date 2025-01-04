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
                    text: 'Casper wykonał WYJĄTKOWĄ pracę przy moim projekcie! Jego kod był dopracowany, wolny od błędów i pokazał jego głęboką wiedzę. Co więcej, szybka realizacja i duch współpracy sprawiły, że praca z nim była przyjemnością.',
                    author: 'Johann Schwarz',
                    position: 'Niemcy'
                },
                {
                    text: 'Casper jest fantastyczną osobą do współpracy! To, że jest tak młody, świadczy o tym, jak jest inteligentny i zdolny. Jestem pod wielkim wrażeniem poziomu jego pracy i profesjonalizmu. Gorąco polecam Caspera, jeśli szukasz dobrze wykonanej pracy przed terminem.',
                    author: 'Hansel Annie',
                    position: 'Kanada'
                },
                {
                    text: 'Świetna współpraca, moje wymagania były trudne do wytłumaczenia, ale dzięki Casperowi osiągnęliśmy zamierzony rezultat. Dziękuję jeszcze raz',
                    author: 'Roberto Buti',
                    position: 'Włochy'
                }
            ]
        },
        contact: {
            title: 'Umów spotkanie',
            subtitle: 'Porozmawiajmy o Twoim projekcie. Skontaktuj się ze mną bezpośrednio przez kalendarz.',
            form: {
                name: 'Imię i nazwisko',
                email: 'Email',
                message: 'Wiadomość',
                submit: 'Umów spotkanie →'
            }
        },
        whyMe: {
            title: 'Dlaczego ja?',
            features: [
                {
                    number: '01',
                    title: 'Szybkość i jakość',
                    description: 'Wieloletnie doświadczenie w freelancingu nauczyło mnie efektywnej realizacji projektów. Szybkość nie oznacza kompromisów w jakości - to sytuacja win-win, gdzie Ty otrzymujesz produkt szybciej, a ja mogę podjąć się kolejnych wyzwań.'
                },
                {
                    number: '02',
                    title: 'Sprawdzone doświadczenie',
                    description: 'Ponad 4 lata aktywnej pracy z różnorodnymi projektami i technologiami. Każdy zrealizowany projekt to nie tylko kod, ale również cenne doświadczenie w komunikacji i rozwiązywaniu złożonych problemów biznesowych.'
                },
                {
                    number: '03',
                    title: 'Kompleksowe podejście',
                    description: 'Nie tylko programuję, ale również doradzam w kwestiach technicznych i biznesowych. Pomagam wybrać optymalne rozwiązania, które sprawdzą się zarówno dziś, jak i w przyszłości.'
                }
            ]
        },
        footer: {
            copyright: '© 2024 Kacper Stefański. Wszystkie prawa zastrzeżone.',
            privacyPolicy: 'Polityka Prywatności'
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
                    text: 'Casper did an EXCEPTIONAL job on my project! His code was polished, bug-free, and showcased his deep expertise. Moreover, his prompt delivery and cooperative spirit made working with him a breeze.',
                    author: 'Johann Schwarz',
                    position: 'Germany'
                },
                {
                    text: 'Casper is fantastic to work with! That he is so young is a testament to how smart and capable he is. I\'m very impressed at the level of his work and his professionalism. I highly recommend Casper if you are looking for a job well done and ahead of schedule.',
                    author: 'Hansel Annie',
                    position: 'Canada'
                },
                {
                    text: 'Great cooperation, my request was difficult to explain, but thanks to Casper we have reached the result. Thank you again',
                    author: 'Roberto Buti',
                    position: 'Italy'
                }
            ]
        },
        contact: {
            title: 'Schedule a meeting',
            subtitle: 'Let\'s talk about your project. Contact me directly through the calendar.',
            form: {
                name: 'Full name',
                email: 'Email',
                message: 'Message',
                submit: 'Schedule a meeting →'
            }
        },
        whyMe: {
            title: 'Why me?',
            features: [
                {
                    number: '01',
                    title: 'Speed and quality',
                    description: 'Years of freelancing taught me how to deliver projects efficiently. Speed doesn\'t mean compromising quality - it\'s a win-win situation where you get your product faster, and I can take on new challenges.'
                },
                {
                    number: '02',
                    title: 'Proven experience',
                    description: 'Over 4 years of active work with diverse projects and technologies. Each completed project represents not just code, but valuable experience in communication and solving complex business problems.'
                },
                {
                    number: '03',
                    title: 'Comprehensive approach',
                    description: 'I don\'t just code, I also provide technical and business consulting. I help choose optimal solutions that will work both today and in the future.'
                }
            ]
        },
        footer: {
            copyright: '© 2024 Kacper Stefański. All rights reserved.',
            privacyPolicy: 'Privacy Policy'
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
        contactSection.querySelector('.submit-btn').textContent = t.contact.form.submit;
    }
    
    // Zapisz preferencję języka
    localStorage.setItem('preferredLanguage', lang);
    
    // Aktualizuj aktywny przycisk języka
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Nasłuchiwanie na przyciski zmiany języka
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            
            // Aktualizuj aktywny przycisk
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Zmień język
            changeLanguage(lang);
        });
    });

    // Ustaw początkowy język
    changeLanguage(currentLang);
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
