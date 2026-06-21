// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Theme Toggle Logic with LocalStorage Persistence
    const toggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("portfolio-theme");

    // Helper function to set theme
    const setTheme = (isLight) => {
        if (isLight) {
            document.body.classList.add("light-mode");
            toggleBtn.innerHTML = "🌙 Dark";
            localStorage.setItem("portfolio-theme", "light");
        } else {
            document.body.classList.remove("light-mode");
            toggleBtn.innerHTML = "☀️ Light";
            localStorage.setItem("portfolio-theme", "dark");
        }
    };

    // Initialize theme based on preference or system settings
    if (savedTheme === "light") {
        setTheme(true);
    } else if (savedTheme === "dark") {
        setTheme(false);
    } else {
        // Fallback to system preferred color scheme
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        setTheme(prefersLight);
    }

    toggleBtn.addEventListener("click", () => {
        const isCurrentLight = document.body.classList.contains("light-mode");
        setTheme(!isCurrentLight);
    });

    // 3. Hamburger Mobile Menu Configuration
    const hamburger = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll("#navLinks a");

    if (hamburger && navLinks) {
        // Toggle mobile menu
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking navigation links
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });

        // Close menu when clicking anywhere outside
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            }
        });
    }

    // 4. Lenis Smooth Scroll Configuration
    let lenisInstance = null;
    if (typeof Lenis !== 'undefined') {
        let isDesktop = window.innerWidth > 1024;
        lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: isDesktop,
            smoothTouch: false
        });

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Adjust Lenis wheel smoothing dynamically on resize
        window.addEventListener('resize', () => {
            const currentDesktop = window.innerWidth > 1024;
            if (lenisInstance) {
                lenisInstance.options.smoothWheel = currentDesktop;
            }
        });
    }

    // 5. Skill Bar Animations
    const animateSkillBars = () => {
        document.querySelectorAll('.skill-fill').forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            if (targetWidth) {
                fill.style.width = targetWidth;
            }
        });
    };

    // 6. Scroll Reveal Animations (IntersectionObserver)
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Animate skill bars if the skills section becomes visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, revealObserverOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Fallback IntersectionObserver specifically for the skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.2 });
        skillObserver.observe(skillsSection);
    }

    // 7. Expandable Experience Details Cards
    document.querySelectorAll('.card.expandable').forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });

    // 8. Staggered Hero Elements Load Animations
    const tag = document.querySelector(".hero-text .tag");
    const h1 = document.querySelector(".hero-text h1");
    const p = document.querySelector(".hero-text p");
    const buttons = document.querySelector(".hero-text .buttons");
    const heroCard = document.querySelector(".hero-card");

    if (tag) {
        tag.style.opacity = "0";
        tag.style.animation = "slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        tag.style.animationDelay = "0.1s";
    }
    if (h1) {
        h1.style.opacity = "0";
        h1.style.animation = "slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        h1.style.animationDelay = "0.2s";
    }
    if (p) {
        p.style.opacity = "0";
        p.style.animation = "slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        p.style.animationDelay = "0.3s";
    }
    if (buttons) {
        buttons.style.opacity = "0";
        buttons.style.animation = "slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        buttons.style.animationDelay = "0.4s";
    }
    if (heroCard) {
        heroCard.style.opacity = "0";
        heroCard.style.animation = "scaleFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        heroCard.style.animationDelay = "0.5s";
    }

    // 9. Optimize image loading dynamically
    document.querySelectorAll('img').forEach(img => {
        if (img.classList.contains('profile-img')) {
            img.setAttribute('loading', 'eager');
        } else {
            img.setAttribute('loading', 'lazy');
        }
    });
});
