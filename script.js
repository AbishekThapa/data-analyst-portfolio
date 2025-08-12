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
        
        // Fade in the typing container first
        setTimeout(() => {
            typingElement.style.transition = 'opacity 0.5s ease-in-out';
            typingElement.style.opacity = '1';
            
            // Start typing animation after fade-in
            setTimeout(() => {
                var options = {
                    strings: [
                        "<span class='heading-fill-animation'><span class='heading-text gradient-text'>Business Analyst</span></span>",
                        "<span class='heading-fill-animation'><span class='heading-text gradient-text'>Data Analyst</span></span>"
                    ],
                    typeSpeed: 50,
                    backSpeed: 30,
                    startDelay: 0,
                    loop: false,
                    showCursor: false,
                    cursorChar: '|',
                    contentType: 'html',
                    onComplete: (self) => { self.cursor.style.display = 'none'; },
                };
                var typed = new Typed('#typing-text', options);
            }, 300);
        }, 800);
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