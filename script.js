const player = document.getElementById('player');
const anti_mage = document.getElementById('anti_mage');
const animateButton = document.getElementById('animateButton');
const animatedElement = document.getElementById('anti_mage');

document.addEventListener("keydown", function(){
    fly();
})

function fly(){
    if(player.classList !="fly"){
        player.classList.add("fly")
    }
    setTimeout(function(){
        player.classList.remove("fly")
    }, 300)
}

let Alive = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let anti_mageLeft = parseInt(window.getComputedStyle(ant_mage).getPropertyValue("left"));
    if(anti_mageLeft < 30 && anti_mageLeft > 0 && playerTop>=70){
        alert("WASTED")
    }

}, 10)
