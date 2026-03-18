const viewButton = document.querySelector('.view')
const checkButton = document.querySelector('.Check');

checkButton.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
});



anime({
    targets: 'h1',
    translateY: [-30, 0],
    opacity: [0, 2],
    duration: 800,
    eases: 'easeOutQuad'
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
    targets: '.circle',
    translateY: [0,-25,0],
    easing: 'spring',
    stiffness: 150, damping: 5,
    loop:true,
});

anime({
    targets: '.text-xl',
    lines:true,
    class: 'split-word',
    translateY: ['75%', '0%'],
    duration: 750,
    ease: 'inOutQuad',
    loop: true,
    
})