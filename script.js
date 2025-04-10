document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'pl';

    // Inicjalizacja tłumaczeń
    function translatePage() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Aktualizacja aktywnego przycisku języka
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    // Obsługa przycisków zmiany języka
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');
            currentLang = newLang;
            localStorage.setItem('language', currentLang);
            translatePage();
        });
    });

    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
        translatePage(); // Tłumaczenie przy załadowaniu strony
    });

    const handleScroll = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Inicjalne tłumaczenie
    translatePage();
});
