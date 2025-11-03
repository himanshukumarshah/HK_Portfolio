// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    initParticles();

    initTyped();

    const heroAvatar = document.getElementById('hero-avatar');
    if (heroAvatar) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            heroAvatar.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    revealElements.forEach(el => {
        observer.observe(el);
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // INTERACTIVE: 3D Tilt ---
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
		max: 10,
		speed: 400,
        perspective: 1000,
	});

});


// --- Function to configure Particle.js ---
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64ffda" // Particle color (our accent)
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8892b0", // Line color (our medium text)
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2, // Movement speed
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse" // Pushes particles away on hover
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Adds particles on click
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    });
}

// --- Function to configure Typed.js ---
function initTyped() {
    const options = {
        strings: [
            'a passionate Web Developer.',
            'a JavaScript enthusiast.',
            'a React specialist.',
            'a problem solver.',
            'a lifelong learner.'
        ],
        typeSpeed: 50,  // Speed of typing
        backSpeed: 25,  // Speed of deleting
        backDelay: 2000, // Pause before deleting
        startDelay: 500, // Pause before starting
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: false, // We'll style it ourselves
    };
    
    // Check if the element exists before initializing
    const typedElem = document.getElementById('typed-text');
    if (typedElem) {
        const typed = new Typed('#typed-text', options);
    }
}