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

function closeMenuToggle () {

    menuSection.classList.toggle("on", show)
    show = !show; 
}