// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor
    const cursor = {
        outer: document.querySelector('.cursor-outer'),
        inner: document.querySelector('.cursor-inner')
    };

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor.outer, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2
        });
        gsap.to(cursor.inner, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    // Cursor hover effect
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.outer.classList.add('cursor-hover');
            cursor.inner.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.outer.classList.remove('cursor-hover');
            cursor.inner.classList.remove('cursor-hover');
        });
    });

    // Click animation
    document.addEventListener('mousedown', () => {
        cursor.outer.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', () => {
        cursor.outer.classList.remove('cursor-click');
    });

    // Hero Section Animation
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" }});
    
    heroTimeline
        .from('.hero-content', {
            opacity: 0,
            y: 50,
            duration: 1
        })
        .from('.hero-title .greeting', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5")
        .from('.hero-title .name', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5")
        .from('.hero-subtitle', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5")
        .from('.cta-buttons', {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.5");

    // Navigation Animation
    gsap.from('.main-nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Floating Elements Animation
    const elements = document.querySelectorAll('.element');
    elements.forEach((element, index) => {
        gsap.to(element, {
            x: "random(-20, 20)",
            y: "random(-20, 20)",
            rotation: "random(-10, 10)",
            duration: "random(15, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
        });
    });

    // Easter Egg Animation
    const easterEgg = document.querySelector('.easter-egg');
    let isEasterEggActive = false;

    easterEgg.addEventListener('click', () => {
        if (!isEasterEggActive) {
            isEasterEggActive = true;
            
            // Create sparkles
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                document.body.appendChild(sparkle);

                gsap.fromTo(sparkle, 
                    {
                        position: 'fixed',
                        left: easterEgg.getBoundingClientRect().left + 'px',
                        top: easterEgg.getBoundingClientRect().top + 'px',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'var(--accent-primary)',
                        borderRadius: '50%',
                        opacity: 1
                    },
                    {
                        duration: "random(1, 2)",
                        x: "random(-100, 100)",
                        y: "random(-100, 100)",
                        rotation: "random(-180, 180)",
                        opacity: 0,
                        onComplete: () => {
                            sparkle.remove();
                            if (i === 19) isEasterEggActive = false;
                        }
                    }
                );
            }

            // Rotate the star
            gsap.to(easterEgg, {
                rotation: 360,
                duration: 1,
                ease: "back.out(1.7)"
            });
        }
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('nav-active');
        
        gsap.to(navLinks, {
            height: isActive ? 0 : 'auto',
            opacity: isActive ? 0 : 1,
            duration: 0.3,
            onStart: () => {
                if (!isActive) {
                    navLinks.classList.add('nav-active');
                    navLinks.style.display = 'flex';
                }
            },
            onComplete: () => {
                if (isActive) {
                    navLinks.classList.remove('nav-active');
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Button Hover Animation
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
    });
});
// About Section Animations
function initAboutAnimations() {
    // Image animation
    gsap.from('.profile-pic', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.to('.image-border', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        duration: 1,
        delay: 0.5
    });

    // Text animations
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.introduction', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    gsap.from('.fun-fact', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6
    });

    // Skills animations
    gsap.from('.skills-container h3', {
        scrollTrigger: {
            trigger: '.skills-container',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 1
    });

    // Animate skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.skills-container',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 * index,
            ease: 'back.out(1.7)'
        });
    });

    // Hover animation for skill items
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.skill-icon'), {
                scale: 1.2,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.skill-icon'), {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Your existing animations...
    
    // Initialize about section animations
    initAboutAnimations();
});

// Education Section Animations
function initEducationAnimations() {
    // Animate section title
    gsap.from('.education-section .section-title', {
        scrollTrigger: {
            trigger: '.education-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate timeline line
    gsap.from('.timeline::before', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.inOut'
    });

    // Animate timeline items
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');
        const card = item.querySelector('.timeline-card');
        
        // Create a timeline for each education entry
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });

        // Add animations to the timeline
        tl.from(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        })
        .from(content, {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.3')
        .from(card, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.6');
    });

    // Hover animations for timeline cards
    const cards = document.querySelectorAll('.timeline-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 8px 30px rgba(240, 166, 202, 0.2)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            });
        });
    });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Your existing animations...
    
    // Initialize education section animations
    initEducationAnimations();
});

// Projects Section Animations
function initProjectsAnimations() {
    // Animate section title
    gsap.from('.projects-section .section-title', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate project cards
    const projectCards = gsap.utils.toArray('.project-card');
    
    projectCards.forEach((card, index) => {
        // Create a timeline for each card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });

        // Add card animations
        tl.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from(card.querySelector('.project-image img'), {
            scale: 1.2,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .from(card.querySelector('.image-overlay'), {
            opacity: 0,
            duration: 0.4
        }, '-=0.2')
        .from(card.querySelectorAll('.tech-item'), {
            opacity: 0,
            scale: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .from(card.querySelectorAll('.project-link'), {
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.2');
    });

    // Hover animations for project cards
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(card, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Button hover animations
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -2,
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Your existing animations...
    
    // Initialize projects section animations
    initProjectsAnimations();
});


// Skills Section Animations
function initSkillsAnimations() {
    // Animate section title and intro
    gsap.from('.skills-section .section-title', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.section-intro', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Clone carousel items for infinite scroll
    const carousel = document.querySelector('.skills-carousel');
    const carouselItems = carousel.innerHTML;
    document.querySelector('.skills-carousel[aria-hidden="true"]').innerHTML = carouselItems;

    // Set up infinite scroll animation
    const totalWidth = carousel.offsetWidth;
    const duration = totalWidth / 100; // Adjust speed based on width

    // Create infinite scroll animation
    const infiniteScroll = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'none' }
    });

    infiniteScroll
        .to('.skills-carousel', {
            x: -totalWidth,
            duration: duration,
            ease: 'none'
        });

    // Pause animation on hover
    const carouselContainer = document.querySelector('.skills-carousel-container');
    
    carouselContainer.addEventListener('mouseenter', () => {
        gsap.to(infiniteScroll, {
            timeScale: 0,
            duration: 0.5
        });
    });

    carouselContainer.addEventListener('mouseleave', () => {
        gsap.to(infiniteScroll, {
            timeScale: 1,
            duration: 0.5
        });
    });

    // Animate skill items on scroll
    const skillItems = gsap.utils.toArray('.skill-item');
    
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.skills-carousel-container',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Hover animations for skill items
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.skill-logo'), {
                scale: 1.1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.skill-logo'), {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Your existing animations...
    
    // Initialize skills section animations
    initSkillsAnimations();
});