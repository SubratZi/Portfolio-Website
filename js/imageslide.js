const slider = document.querySelector('.slide-container');
const images = document.querySelectorAll('.image');
const imageWidth = 458;

let isDragging = false;
let startPos = 0;
let currentIndex = 0;

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('mousemove', drag);

slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchend', endDrag);
slider.addEventListener('touchmove', drag);

function startDrag(e) {
    isDragging = true;
    startPos = getPositionX(e);
    slider.style.cursor = "grab";
    
}

function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos;
    
    if (diff < 0 && currentIndex < images.length - 1) {
        currentIndex += 1;
    } else if (diff > 0 && currentIndex > 0) {
        currentIndex -= 1;
    }


    slider.style.transition = "transform 1s"
    slider.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function endDrag() {
    isDragging = false;
    slider.style.cursor = "auto";
    
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

