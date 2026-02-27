const checkButton = document.querySelector('.Check');

checkButton.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
});

anime({
    targets: 'h1',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad'
});


anime({
    targets: '.block',
    translateY: [60, 0],
    opacity: [0, 1],
    duration: 900,
    delay: 300,
    easing: 'easeOutQuad'
});

anime({
    targets: '.Check',
    scale: [1, 1.05],
    duration: 800,
    delay: 1200,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});


