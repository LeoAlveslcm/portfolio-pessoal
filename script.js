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
});

// Game //

const game = document.querySelector(".game");
const start = document.querySelector("#start");
const startImage = start.querySelector("#start-img");
const startButton = document.querySelector("#btn-start");
const playButton = document.querySelector("#btn-jogar");
const textIntro = document.querySelector(".text-intro");
const titleGame = document.querySelector("#title-game");

const ninjaRun = document.querySelector("#ninja-run");
const barrel = document.querySelector("#barrel");
const ave = document.querySelector("#ave");
const vilage1 = document.querySelector("#vilage1");
const vilage2 = document.querySelector("#vilage2");
const cloud1 = document.querySelector("#cloud1");
const cloud2 = document.querySelector("#cloud2");
const keys = document.querySelector("#keys");



startButton.addEventListener("click", function() {
    if (game.style.display === "flex") {
        game.style.display = "none";
        textIntro.style.display = "flex"
        titleGame.style.display = "flex"

        reset();
        loopGame();
        startImage.src = "jogo/start-game.png";
        ninjaRun.src = "jogo/ninja-run.gif";

    } else {
        game.style.display = "flex";
        textIntro.style.display = "none";
        titleGame.style.display = "none";

        reset();
        loopGame();
        startImage.src = "jogo/start-game.png";
        ninjaRun.src = "jogo/ninja-run.gif";

    } 
});

playButton.addEventListener("click", function() {

    reset();
    loopGame();

    barrel.style.animation = "barrel-rolling 3s 10s infinite linear";
    ave.style.animation = "ave-fly 3s 14.5s infinite linear";
    vilage1.style.animation = "vilage1-pass 40s infinite linear";
    vilage2.style.animation = "vilage1-pass 40s 21s infinite linear";
    cloud1.style.animation = "cloud1-pass 15s infinite linear";
    cloud2.style.animation = "cloud1-pass 15s 8s infinite linear";
    keys.style.animation = "keys-pass 8s 1 linear";

    start.style.display = "none";

    ninjaRun.src = "jogo/ninja-run.gif";

});

document.addEventListener("keydown", function(pulo) {

    if (pulo.keyCode == 87) {
        ninjaRun.classList.add("ninja-jump");
        ninjaRun.src = "jogo/ninja-jump.png";

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

function reset() {
    barrel.style.left = "";
    ave.style.left = "";
    vilage1.style.left = "";
    vilage2.style.left = "";
    cloud1.style.left = "";
    cloud2.style.left = "";
    keys.style.left = "";
    ninjaRun.style.bottom = "";

};

function loopGame() { setInterval(() => {
    const barrelPosition = barrel.offsetLeft;
    const avePosition = ave.offsetLeft;
    const ninjaRunPosition = +window.getComputedStyle(ninjaRun).bottom.replace("px", "");

    if (barrelPosition <= 50 && barrelPosition > 0 && ninjaRunPosition < 50) {

        stopAnimation();
        clearInterval(loopGame)

    } if (avePosition <= 50 && ninjaRun.style.width === "70px" ) {
        
        stopAnimation();
        clearInterval(loopGame)
        }
}, 10);
};

function stopAnimation() {
    const barrelPosition = barrel.offsetLeft;
    const avePosition = ave.offsetLeft;
    const vilage1Position = vilage1.offsetLeft;
    const vilage2Position = vilage2.offsetLeft;
    const cloud1Position = cloud1.offsetLeft;
    const cloud2Position = cloud2.offsetLeft;
    const keysPosition = keys.offsetLeft;
    const ninjaRunPosition = +window.getComputedStyle(ninjaRun).bottom.replace("px", "");

        ave.style.animation = "none";
        ave.style.left = `${avePosition}px`;
    
        barrel.style.animation = "none";
        barrel.style.left = `${barrelPosition}px`;
    
        vilage1.style.animation = "none";
        vilage1.style.left = `${vilage1Position}px`;
    
        vilage2.style.animation = "none";
        vilage2.style.left = `${vilage2Position}px`;
    
        cloud1.style.animation = "none";
        cloud1.style.left = `${cloud1Position}px`;
    
        cloud2.style.animation = "none";
        cloud2.style.left = `${cloud2Position}px`;

        keys.style.animation = "none";
        keys.style.left = `${keysPosition}px`;
    
        ninjaRun.style.bottom = `${ninjaRunPosition}px`;
    
        ninjaRun.src = "jogo/ninja-dead.png";
        ninjaRun.style.width = "70px";
    
        start.style.display = "flex";
        startImage.src = "jogo/game-over.png";
};



