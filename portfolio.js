

anime({
    targets: '.navbar',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    eases: 'OutQuad'
});




const draggable =
anime.createDraggable('.card', {
    container: '.grid',
    snap: 56, 
    x: { snap: [0, 200] }, 
});
