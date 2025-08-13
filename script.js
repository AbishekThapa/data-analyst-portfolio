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

    // Wave emoji shake animation
    const waveEmoji = document.getElementById('wave-emoji');
    if (waveEmoji) {
        waveEmoji.addEventListener('click', () => {
            waveEmoji.classList.remove('animate-shake');
            // Force reflow to restart animation
            void waveEmoji.offsetWidth;
            waveEmoji.classList.add('animate-shake');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                waveEmoji.classList.remove('animate-shake');
            }, 500);
        });
    }

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
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
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

    // Typing animation
    if (document.getElementById('typing-text')) {
        const typingElement = document.getElementById('typing-text');
        
        // Ensure smooth rendering
        typingElement.style.opacity = '1';
        typingElement.style.willChange = 'contents';
        
        // Start typing animation with smoother settings
        setTimeout(() => {
            var options = {
                strings: [
                    "<span class='gradient-text'>Business Analyst</span>",
                    "<span class='gradient-text'>Data Analyst</span>"
                ],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2500,
                startDelay: 500,
                loop: true,
                showCursor: false,
                cursorChar: '|',
                contentType: 'html',
                smartBackspace: true,
                fadeOut: false,
                fadeOutClass: 'typed-fade-out',
                fadeOutDelay: 0
            };
            var typed = new Typed('#typing-text', options);
        }, 1000);
    }


    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                // If submission is successful, show the success message
                contactForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        })
        .catch(error => {
            // Handle network errors
            alert('Oops! There was a network error.');
        });
    });
});