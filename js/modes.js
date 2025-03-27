function touchbar(){
    let bar = document.getElementsByClassName("pages")[0];
    bar.style.visibility = "visible";
}
function barclose(){
    let cancel = document.getElementsByClassName("pages")[0];
    cancel.style.visibility = "hidden";
}

let clickedbtn = document.querySelector(".light-mode");
let htmlselector = document.querySelector("html");
let touchbtn = document.querySelector(".responsive-mode");

function modechange(){
    const currenttheme = htmlselector.getAttribute("data-theme");
    if (!currenttheme || currenttheme === "light"){
        htmlselector.setAttribute("data-theme", "dark" );
        savedtheme("dark");
    }
    else{
        htmlselector.setAttribute("data-theme", "light" );
        savedtheme("light");
    }
}

clickedbtn.addEventListener("click", modechange);
touchbtn.addEventListener("touchstart", modechange);

// Check if the system has set default dark preferences!

const isDarkMode = () =>{
    const mediaobj = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    return mediaobj && mediaobj.matches;
}

window.addEventListener("load", () => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme){
        htmlselector.setAttribute("data-theme", savedTheme);
    }
    const currenttheme = htmlselector.getAttribute("data-theme");
    if (isDarkMode() && !currenttheme){
        htmlselector.setAttribute("data-theme","dark");
    }
})

function savedtheme(theme){
    window.localStorage.setItem("theme",theme);
}