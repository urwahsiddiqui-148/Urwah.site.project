document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .zoom-in, .slide-in-small');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar Active State with IntersectionObserver (Performance Optimized)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of section is visible
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinksContainer.contains(e.target) && !hamburger.contains(e.target) && navLinksContainer.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    // Global Click Sound Effect
    const clickSound = new Audio('assets/audio/click.mp3');
    clickSound.preload = 'auto';
    // Set a subtle volume
    clickSound.volume = 0.4;

    document.addEventListener('click', (e) => {
        // Check if the clicked element or its parents is a button/interactive element
        // specific classes added to ensure all button-like elements are caught
        const target = e.target.closest('a, button, input[type="button"], input[type="submit"], [role="button"], .btn, .social-icon, .hamburger, .project-card, .service-card, .skill-card');

        if (target) {
            // Reset and play
            clickSound.currentTime = 0;
            // Play returns a promise, handle potential errors (like missing file) silently
            clickSound.play().catch(() => {
                // Ignore errors (e.g., file not found or autoplay policy) to prevents console spam
            });
        }
    });

    // Theme Toggle Sound (Optional specific handling if needed, but above covers it)
});
