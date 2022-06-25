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

// Game //

const ninjaRun = document.querySelector("#ninja-run");
const barrel = document.querySelector("#barrel");
const ave = document.querySelector("#ave");



document.addEventListener("keydown", function(pulo) {

    if (pulo.keyCode == 87) {
        ninjaRun.classList.add("ninja-jump");
        ninjaRun.src = "jogo/ninja-jump.png";
        ninjaRun.style.width = "60px";

        setTimeout(() => {
            ninjaRun.classList.remove("ninja-jump")
            ninjaRun.src = "jogo/ninja-run.gif";
            ninjaRun.style.width = "70px";
        }, 500);
    }

});

document.addEventListener("keydown", function(dash) {

    if (dash.keyCode == 83) {
        ninjaRun.src = "jogo/ninja-dash.gif";
        ninjaRun.style.width = "65px";

        setTimeout(() => {
            ninjaRun.src = "jogo/ninja-run.gif";
            ninjaRun.style.width = "70px";
        }, 600);
    }

});

const loopGame = setInterval(() => {
    const barrelPosition = barrel.offsetLeft;
    const avePosition = ave.offsetLeft;
    const ninjaRunPosition = +window.getComputedStyle(ninjaRun).bottom.replace("px", "");

    if (barrelPosition <= 50 && barrelPosition > 0 && ninjaRunPosition < 50) {
    barrel.style.animation = "none";
    barrel.style.left = `${barrelPosition}px`;

    ave.style.animation = "none";
    ave.style.left = `${avePosition}px`;

    ninjaRun.style.animation = "none";
    ninjaRun.style.bottom = `${ninjaRunPosition}px`;

    ninjaRun.src = "jogo/ninja-dead.png";
    ninjaRun.style.width = "70px";

    clearInterval(loopGame)
    }
}, 10);

const loopGame2 = setInterval(() => {
    const avePosition = ave.offsetLeft;
    const barrelPosition = barrel.offsetLeft;
    const ninjaRunPosition = +window.getComputedStyle(ninjaRun).bottom.replace("px", "");

    if (avePosition <= 50 && ninjaRun.style.width === "70px") {
    ave.style.animation = "none";
    ave.style.left = `${avePosition}px`;

    barrel.style.animation = "none";
    barrel.style.left = `${barrelPosition}px`;

    ninjaRun.style.animation = "none";
    ninjaRun.style.bottom = `${ninjaRunPosition}px`;

    ninjaRun.src = "jogo/ninja-dead.png";
    ninjaRun.style.width = "70px";

    clearInterval(loopGame2)
    }
}, 10);