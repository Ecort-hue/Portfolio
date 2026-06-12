// portfolio.js

// Navbar entrance
anime({
    targets: '.navbar',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad'
});

// Hero entrance
anime({
    targets: '.hero-section',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 900,
    delay: 200,
    easing: 'easeOutQuad'
});

// Cards staggered entrance
anime({
    targets: '.project-card',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(100, { start: 400 }),
    easing: 'easeOutQuad'
});
