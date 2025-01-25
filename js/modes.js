function touchbar(){
    let bar = document.getElementsByClassName("pages")[0];
    bar.style.visibility = "visible";
}
function barclose(){
    let cancel = document.getElementsByClassName("pages")[0];
    cancel.style.visibility = "hidden";
}
// let mode = document.querySelector("body");
// let intromode = document.querySelectorAll('.intro')
// let navmode = document.querySelectorAll(".nav-item");
// let anmode = document.querySelectorAll('.nav-an');
// let icon = document.querySelectorAll(".icon");
// let description =document.querySelectorAll(".description");
// let htmlselector = document.querySelector("html");



// function modechange(){
    
//     if (mode.style.backgroundColor === "white" || !mode.style.backgroundColor){
//         mode.style.backgroundColor = "#121212";
//         navmode.forEach(item => {
//             item.style.backgroundColor = "#121212";
//         });
//         anmode.forEach(item => {
//             item.style.color = "white";
//         });
//         intromode.forEach(item =>{
//             item.style.color = "white";
//         })
//         icon.forEach(item=>{
//             item.style.color = "white"
//         })
//         description.forEach(item=>{
//             item.style.color= "white"
//         })
//         localStorage.setItem("backgroundColor", "#121212");
//         localStorage.setItem("textColor", "white")
//     }else{
//         mode.style.backgroundColor = "white";
//         navmode.forEach(item => {
//             item.style.backgroundColor = "white";
//         });
//         anmode.forEach(item => {
//             item.style.color = "black";
//         });
//         intromode.forEach(item =>{
//             item.style.color = "black";
//         })
//         icon.forEach(item=>{
//             item.style.color = "black"
//         })
//         description.forEach(item=>{
//             item.style.color= "black"
            
//         })
//         localStorage.setItem("backgroundColor", "white");
//         localStorage.setItem("textColor", "black")
//     }
// }

let clickedbtn = document.querySelector(".light-mode");
let htmlselector = document.querySelector("html");

clickedbtn.addEventListener("click", function() {
    const currenttheme = htmlselector.getAttribute("data-theme");
    if (!currenttheme || currenttheme === "light"){
        htmlselector.setAttribute("data-theme", "dark" );
        savedtheme("dark");
    }
    else{
        htmlselector.setAttribute("data-theme", "light" );
        savedtheme("light");
    }
})

// Check if the system has set default dark preferences!

const isDarkMode = () =>{
    const mediaobj = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    return mediaobj && mediaobj.matches;
}

window.addEventListener("load", () => {
    // Retrieve the stored values
    console.log("Working");
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


//     let savedBgColor = localStorage.getItem("backgroundColor") || "white";
//     let savedTextColor = localStorage.getItem("textColor") || "black";

//     // Apply the stored values
//     mode.style.backgroundColor = savedBgColor;
//     navmode.forEach(item => item.style.backgroundColor = savedBgColor);
//     anmode.forEach(item => item.style.color = savedTextColor);
//     intromode.forEach(item => item.style.color = savedTextColor);
//     icon.forEach(item => item.style.color = savedTextColor);
// });