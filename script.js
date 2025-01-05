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
            title: 'Cześć, jestem',
            name: 'Kacper',
            subtitle: 'Developer | Biznesmen | Freelancer',
            cta: 'Umów się na spotkanie 💻'
        },
        portfolio: {
            title: 'Portfolio',
            description: 'Moje najnowsze projekty',
            projects: {
                blastgate: {
                    title: 'System automatyzacji odciągu wiórów',
                    description: 'Inteligentny system sterowania przepustnicami w systemie odciągu wiórów oparty o Node-RED',
                    tags: {
                        nodeRed: 'Node-RED',
                        rpi: 'RPI',
                        automation: 'Automatyka'
                    },
                    links: {
                        details: 'Szczegóły projektu →'
                    }
                }
            }
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
            title: 'Hi, I\'m',
            name: 'Kacper',
            subtitle: 'Developer | Businessman | Freelancer',
            cta: 'Schedule a meeting 💻'
        },
        portfolio: {
            title: 'Portfolio',
            description: 'My latest projects',
            projects: {
                blastgate: {
                    title: 'Dust Collection Automation System',
                    description: 'Intelligent blast gate control system for dust collection based on Node-RED',
                    tags: {
                        nodeRed: 'Node-RED',
                        rpi: 'RPI',
                        automation: 'Automation'
                    },
                    links: {
                        details: 'Project Details →'
                    }
                }
            }
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
    console.log('Changing language to:', lang);
    const t = translations[lang];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const path = element.getAttribute('data-translate');
        console.log('Translating element:', path);
        
        const keys = path.split('.');
        let translation = t;
        
        for (const key of keys) {
            translation = translation?.[key];
        }
        
        if (translation) {
            console.log('Found translation:', translation);
            element.textContent = translation;
        } else {
            console.log('Translation not found for:', path);
        }
    });
    
    // Zapisz preferencję języka
    localStorage.setItem('preferredLanguage', lang);
    
    // Aktualizuj aktywny przycisk języka
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Upewnijmy się, że przyciski języka są prawidłowo podpięte
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            changeLanguage(lang);
        });
    });
    
    // Ustaw początkowy język
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';
    changeLanguage(savedLang);
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
        changeLanguage(lang);
        
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
