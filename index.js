
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




splitText('p', {
    chars: `<span class="char-3d word-{i}">
    <em class="face face-top">{Jo}</em>
    <em class="face-front">{Sh}</em>
    <em class="face face-bottom">{Ua}</em>
  </span>`,
});

const charsStagger = stagger(100, { start: 0 });

createTimeline({ defaults: { ease: 'linear', loop: true, duration: 750 } })
    .add('.char-3d', { rotateX: -90 }, charsStagger)
    .add('.char-3d .face-top', { opacity: [.5, 0] }, charsStagger)
    .add('.char-3d .face-front', { opacity: [1, .5] }, charsStagger)
    .add('.char-3d .face-bottom', { opacity: [.5, 1] }, charsStagger);