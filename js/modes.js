function touchbar(){
    let bar = document.getElementsByClassName("nav-hamburger-bars")[0];
    bar.style.visibility = "visible";
}
function barclose(){
    let cancel = document.getElementsByClassName("nav-hamburger-bars")[0];
    cancel.style.visibility = "hidden";
}
let initialchange = true

function modechange(){
    let mode = document.querySelector("body");
    let intromode = document.querySelectorAll('.intro')
    let navmode = document.querySelectorAll(".nav-item");
    let anmode = document.querySelectorAll('.nav-an')
    let icon = document.querySelectorAll(".icon")
    if (initialchange){
        mode.style.backgroundColor = "#121212";
        navmode.forEach(item => {
            item.style.backgroundColor = "#121212";
        });
        anmode.forEach(item => {
            item.style.color = "white";
        });
        intromode.forEach(item =>{
            item.style.color = "white";
        })
        icon.forEach(item=>{
            item.style.color = "white"
        })
        initialchange = false;
    }else{
        mode.style.backgroundColor = "white";
        navmode.forEach(item => {
            item.style.backgroundColor = "white";
        });
        anmode.forEach(item => {
            item.style.color = "black";
        });
        intromode.forEach(item =>{
            item.style.color = "black";
        })
        icon.forEach(item=>{
            item.style.color = "black"
        })
        initialchange = true;
    }
}