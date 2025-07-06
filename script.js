// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const clickedbtn = document.querySelector(".light-mode");
    const htmlselector = document.querySelector("html");
    const touchbtn = document.querySelector(".responsive-mode");

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    //Theme change effect
       
    function modechange(){
        const currenttheme = htmlselector.getAttribute("data-theme");
        if (!currenttheme || currenttheme === "light"){
            htmlselector.setAttribute("data-theme", "dark" );
            savedtheme("dark");
        }
        else{
            htmlselector.setAttribute("data-theme", "light" );
            savedtheme("light");
        }
    }

    clickedbtn.addEventListener("click", modechange);
    touchbtn.addEventListener("touchstart", modechange);

    const isDarkMode = () =>{
        const mediaobj = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
        return mediaobj && mediaobj.matches;
    }

    window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = window.localStorage.getItem("theme");
    
    if (savedTheme === "dark" || savedTheme === "light") {
        htmlselector.setAttribute("data-theme", savedTheme);
    } else if (isDarkMode()) {
        htmlselector.setAttribute("data-theme", "dark");
    } else {
        htmlselector.setAttribute("data-theme", "light");
    }
    });

    function savedtheme(theme){
        window.localStorage.setItem("theme",theme);
    }

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .research-paper, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Typewriter effect for hero subtitle (optional)
    function typewriterEffect(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typewriter effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typewriterEffect(heroSubtitle, originalText, 80);
        }, 1000);
    }

    // Parallax effect for hero section (subtle)
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    // Only apply parallax if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', parallaxEffect);
    }

    // Skills hover effect enhancement
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project cards enhanced interaction
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });

    // Back to top functionality
    function createBackToTopButton() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #3182ce;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(49, 130, 206, 0.4);
        `;

        document.body.appendChild(backToTop);

        // Show/hide back to top button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });

        // Scroll to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        backToTop.addEventListener('mouseenter', () => {
            backToTop.style.transform = 'translateY(-3px)';
            backToTop.style.boxShadow = '0 6px 16px rgba(49, 130, 206, 0.6)';
        });

        backToTop.addEventListener('mouseleave', () => {
            backToTop.style.transform = 'translateY(0)';
            backToTop.style.boxShadow = '0 4px 12px rgba(49, 130, 206, 0.4)';
        });
    }

    createBackToTopButton();

    // Performance optimization: debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll-heavy functions
    const debouncedParallax = debounce(parallaxEffect, 10);
    const debouncedNavUpdate = debounce(updateActiveNavLink, 50);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.removeEventListener('scroll', parallaxEffect);
        window.addEventListener('scroll', debouncedParallax);
    }

    window.removeEventListener('scroll', updateActiveNavLink);
    window.addEventListener('scroll', debouncedNavUpdate);

    // Initialize everything
    updateActiveNavLink();
});

// Additional utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Add copy functionality to email
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="mailto:"]')) {
        const email = e.target.textContent;
        copyToClipboard(email);
        
        // Show feedback
        const originalText = e.target.textContent;
        e.target.textContent = 'Copied!';
        setTimeout(() => {
            e.target.textContent = originalText;
        }, 2000);
    }
});

// Error handling for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        try {
            // Add rel attributes for security
            this.rel = 'noopener noreferrer';
        } catch (error) {
            console.warn('Unable to open external link:', error);
        }
    });
});