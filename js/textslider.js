const textslider = document.querySelector('.intro-pg');
const texts = document.querySelectorAll('.intro-container');
const textsWidth = 555;
let IsDragging = false;
let StartPos = 0;
let CurrentIndex = 0;

textslider.addEventListener('mousedown', StartDrag);
textslider.addEventListener('mouseup', EndDrag);
textslider.addEventListener('mouseleave', EndDrag);
textslider.addEventListener('mousemove', Drag);

textslider.addEventListener('touchstart', StartDrag);
textslider.addEventListener('touchend', EndDrag);
textslider.addEventListener('touchmove', Drag);

function StartDrag(e) {
    IsDragging = true;
    StartPos = GetPositionX(e);
    textslider.style.cursor = "grab";
    
}

function Drag(e) {
    if (!IsDragging) return;
    const CurrentPosition = GetPositionX(e);
    const Diff = CurrentPosition - StartPos;
    
    if (Diff < 0 && CurrentIndex < texts.length - 1) {
        CurrentIndex += 1;
    } else if (Diff > 0 && CurrentIndex > 0) {
        CurrentIndex -= 1;
    }


    textslider.style.transition = "transform 1s"
    textslider.style.transform = `translateX(${-CurrentIndex * textsWidth}px)`;
}

function EndDrag() {
    IsDragging = false;
    textslider.style.cursor = "auto";
    
}

function GetPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

