// Tłumaczenia
const translations = {
    pl: {
        title: 'Strona internetowa poradni terapeutycznej',
        subtitle: 'Profesjonalna strona internetowa dla Poradni Leczenia Uzależnień i Współuzależnień w Barlinku',
        projectOverview: 'Przegląd projektu',
        projectHistory: 'Historia projektu',
        historyText1: 'Projekt rozpoczął się od zgłoszenia potrzeby stworzenia profesjonalnej strony internetowej dla Poradni Leczenia Uzależnień i Współuzależnień "Nowa Droga" w Barlinku. Klientka potrzebowała nowoczesnej witryny, która prezentowałaby jej działalność terapeutyczną w sposób przejrzysty i budujący zaufanie potencjalnych pacjentów.',
        historyText2: 'Po wstępnych konsultacjach i analizie potrzeb, zdecydowaliśmy się na stworzenie strony, która będzie łączyć profesjonalny wygląd z łatwością obsługi i dostępnością dla wszystkich grup użytkowników, ze szczególnym uwzględnieniem responsywności na urządzeniach mobilnych.',
        keyElements: 'Kluczowe elementy projektu',
        components: {
            responsiveDesign: {
                title: 'Responsywny design',
                desc: 'Pełna optymalizacja na urządzenia mobilne i różne rozmiary ekranów'
            },
            userInterface: {
                title: 'Intuicyjny interfejs',
                desc: 'Prosty i przejrzysty układ ułatwiający nawigację'
            },
            content: {
                title: 'Zoptymalizowana treść',
                desc: 'Profesjonalne teksty dostosowane do potrzeb grupy docelowej'
            },
            contactForm: {
                title: 'Formularz kontaktowy',
                desc: 'Łatwy sposób komunikacji między klientami a poradnią'
            },
            seo: {
                title: 'Optymalizacja SEO',
                desc: 'Dostosowanie strony do wymagań wyszukiwarek internetowych'
            },
            fastLoading: {
                title: 'Szybkie ładowanie',
                desc: 'Optymalizacja szybkości ładowania dla lepszego doświadczenia użytkownika'
            }
        },
        mainFeatures: 'Główne funkcje',
        features: {
            presentation: {
                title: 'Prezentacja oferty',
                desc: 'Przejrzysta prezentacja usług poradni i dostępnych form terapii.'
            },
            aboutSection: {
                title: 'Sekcja o terapeucie',
                desc: 'Budowanie zaufania poprzez przedstawienie kwalifikacji i doświadczenia terapeutki.'
            },
            contactInfo: {
                title: 'Informacje kontaktowe',
                desc: 'Łatwy dostęp do danych kontaktowych i lokalizacji poradni.'
            }
        },
        gallery: 'Galeria',
        stats: {
            codeLines: 'Linijek kodu',
            developmentTime: 'Tygodnie realizacji',
            clientRating: 'Ocena klienta'
        }
    },
    en: {
        title: 'Therapy Clinic Website',
        subtitle: 'Professional website for Addiction and Co-dependency Treatment Center in Barlinek',
        projectOverview: 'Project Overview',
        projectHistory: 'Project History',
        historyText1: 'The project began with a request to create a professional website for the "Nowa Droga" Addiction and Co-dependency Treatment Center in Barlinek. The client needed a modern website that would present her therapeutic activities in a clear way and build trust among potential patients.',
        historyText2: 'After initial consultations and needs analysis, we decided to create a website that would combine professional appearance with ease of use and accessibility for all user groups, with particular emphasis on responsiveness on mobile devices.',
        keyElements: 'Key Project Elements',
        components: {
            responsiveDesign: {
                title: 'Responsive Design',
                desc: 'Full optimization for mobile devices and various screen sizes'
            },
            userInterface: {
                title: 'Intuitive Interface',
                desc: 'Simple and clear layout for easy navigation'
            },
            content: {
                title: 'Optimized Content',
                desc: 'Professional texts tailored to the target group needs'
            },
            contactForm: {
                title: 'Contact Form',
                desc: 'Easy way of communication between clients and the clinic'
            },
            seo: {
                title: 'SEO Optimization',
                desc: 'Adapting the website to search engine requirements'
            },
            fastLoading: {
                title: 'Fast Loading',
                desc: 'Loading speed optimization for better user experience'
            }
        },
        mainFeatures: 'Main Features',
        features: {
            presentation: {
                title: 'Service Presentation',
                desc: 'Clear presentation of clinic services and available forms of therapy.'
            },
            aboutSection: {
                title: 'About the Therapist',
                desc: 'Building trust by presenting qualifications and experience of the therapist.'
            },
            contactInfo: {
                title: 'Contact Information',
                desc: 'Easy access to contact details and clinic location.'
            }
        },
        gallery: 'Gallery',
        stats: {
            codeLines: 'Lines of code',
            developmentTime: 'Weeks of development',
            clientRating: 'Client rating'
        }
    }
};

// Funkcja zmiany języka
function updateContent(lang) {
    const t = translations[lang];
    
    // Aktualizacja tytułu i podtytułu
    document.querySelector('.project-header h1').textContent = t.title;
    document.querySelector('.project-subtitle').textContent = t.subtitle;
    
    // Aktualizacja sekcji przeglądu
    document.querySelector('[data-section="projectOverview"]').textContent = t.projectOverview;
    document.querySelector('.overview-item h3').textContent = t.projectHistory;
    const historyParagraphs = document.querySelectorAll('.overview-item p');
    historyParagraphs[0].textContent = t.historyText1;
    historyParagraphs[1].textContent = t.historyText2;

    // Aktualizacja kluczowych elementów
    document.querySelector('[data-section="keyElements"]').textContent = t.keyElements;
    document.querySelector('[data-component="responsiveDesign"] h3').textContent = t.components.responsiveDesign.title;
    document.querySelector('[data-component="responsiveDesign"] p').textContent = t.components.responsiveDesign.desc;
    document.querySelector('[data-component="userInterface"] h3').textContent = t.components.userInterface.title;
    document.querySelector('[data-component="userInterface"] p').textContent = t.components.userInterface.desc;
    document.querySelector('[data-component="content"] h3').textContent = t.components.content.title;
    document.querySelector('[data-component="content"] p').textContent = t.components.content.desc;
    document.querySelector('[data-component="contactForm"] h3').textContent = t.components.contactForm.title;
    document.querySelector('[data-component="contactForm"] p').textContent = t.components.contactForm.desc;
    document.querySelector('[data-component="seo"] h3').textContent = t.components.seo.title;
    document.querySelector('[data-component="seo"] p').textContent = t.components.seo.desc;
    document.querySelector('[data-component="fastLoading"] h3').textContent = t.components.fastLoading.title;
    document.querySelector('[data-component="fastLoading"] p').textContent = t.components.fastLoading.desc;
    
    // Aktualizacja głównych funkcji
    document.querySelector('[data-section="mainFeatures"]').textContent = t.mainFeatures;
    document.querySelector('[data-feature="presentation"] h3').textContent = t.features.presentation.title;
    document.querySelector('[data-feature="presentation"] p').textContent = t.features.presentation.desc;
    document.querySelector('[data-feature="aboutSection"] h3').textContent = t.features.aboutSection.title;
    document.querySelector('[data-feature="aboutSection"] p').textContent = t.features.aboutSection.desc;
    document.querySelector('[data-feature="contactInfo"] h3').textContent = t.features.contactInfo.title;
    document.querySelector('[data-feature="contactInfo"] p').textContent = t.features.contactInfo.desc;
    
    // Aktualizacja galerii
    document.querySelector('[data-section="gallery"]').textContent = t.gallery;
    
    // Aktualizacja statystyk
    document.querySelectorAll('.stat-label').forEach(label => {
        if (label.parentElement.dataset.stat === 'codeLines') label.textContent = t.stats.codeLines;
        if (label.parentElement.dataset.stat === 'developmentTime') label.textContent = t.stats.developmentTime;
        if (label.parentElement.dataset.stat === 'clientRating') label.textContent = t.stats.clientRating;
    });
}

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

// Obsługa mobilnego menu i przycisków języka
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Obsługa menu mobilnego
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Zamykanie menu po kliknięciu w link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Obsługa przycisków języka
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('preferredLanguage') || 'pl';

    // Ustaw początkowy język
    updateContent(savedLang);
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
    });

    // Dodaj obsługę zmiany języka
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            localStorage.setItem('preferredLanguage', lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            updateContent(lang);
        });
    });
});