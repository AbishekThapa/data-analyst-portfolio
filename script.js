document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = mobileMenuBtn.querySelector('.fa-bars');
    const closeIcon = mobileMenuBtn.querySelector('.fa-times');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Scroll-to-section functionality
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Scroll animation
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();

    // Typing animation for the hero section
    if (document.getElementById('typing-text')) {
        var options = {
            // === MODIFIED STRING FOR ABISHEK ANIMATION ===
            strings: ["Hi, It is <span class='heading-fill-animation'><span class='heading-text gradient-text'>Abishek</span></span>"],
            typeSpeed: 50,
            backSpeed: 25,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html',
            onComplete: (self) => {
                self.cursor.style.display = 'none';
            },
        };

        var typed = new Typed('#typing-text', options);
    }
});