let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}

// MENU RESPONSIVO //

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show = !show;

}) 

const menuNav = menuSection.querySelector(".menu-nav")

menuNav.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show = !show;
})

// Botão mostrar todos os projetos //

const moreBtn = document.querySelector("#more-btn");
const allProjects = document.querySelector(".all-projects");

moreBtn.addEventListener("click", function() {
    if (allProjects.style.display === "flex") {
        allProjects.style.display = "none";
    } else {
        allProjects.style.display = "flex";
    }
})