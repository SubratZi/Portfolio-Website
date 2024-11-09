function applyResponsiveBehavior() {

    const slider = document.querySelector('.slide-container');
    const images = document.querySelectorAll('.image');
    const imageWidth = 340;

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

    // For Text Sliding:
    const textslider = document.querySelector('.intro-pg');
    const texts = document.querySelectorAll('.intro-container');
    const textsWidth = 330;
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

    let intialpositionimage = true;
    function autoslideimage() {
        if (isDragging === false){
            if (intialpositionimage){
                slider.style.transform = `translateX(${-imageWidth}px)`;
                intialpositionimage = false;
            }
            else{
                slider.style.transform = "translateX(0px)";
                intialpositionimage = true;
            }
            slider.style.transition = "transform 0.9s ease";
        }
    }
    setInterval(autoslideimage, 5000);

    let intialpositiontext = true;
    function autoslidetext() {
        if (IsDragging === false){
            if (intialpositiontext){
                textslider.style.transform = `translateX(${-textsWidth}px)`;
                intialpositiontext = false;
            }
            else{
                textslider.style.transform = "translateX(0px)";
                intialpositiontext = true;
            }
            textslider.style.transition = "transform 0.9s ease";
        }
    }
    setInterval(autoslidetext, 5000);
}
let mediaQuery = window.matchMedia("(max-width: 1261px)");

function handleScreenChange(e) {

    if (e.matches) {
        applyResponsiveBehavior();
    }
}

mediaQuery.addEventListener("change", handleScreenChange);

handleScreenChange(mediaQuery);


let applyresponsivenesspc= () =>{
    const textslider = document.querySelector('.intro-pg');
    let Isdragging = false;
    let Intialpositiontext = true;
    function autoslideText() {
        if (Isdragging === false){
            if (Intialpositiontext){
                textslider.style.transform = `translateX(${-555}px)`;
                Intialpositiontext = false;
            }
            else{
                textslider.style.transform = "translateX(0px)";
                Intialpositiontext = true;
            }
            textslider.style.transition = "transform 0.9s ease";
        }
    }
    setInterval(autoslideText, 5000);
}

let mediaquery = window.matchMedia("(min-width: 1261px)")

let handlescreenchange= (e) =>{
    if (e.matches){
        applyresponsivenesspc();
    }
}

mediaquery.addEventListener("change", handlescreenchange)

handlescreenchange(mediaquery);