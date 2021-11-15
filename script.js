const h2 = document.createElement ("h2");
h2.textContent = "Eventually this will be a little, fully-fleshed out game made using only what i learned at Flatiron!";

document.querySelector ("body").appendChild (h2);
const character = document.getElementById ("character");
const block = document.getElementById ("block");
const counter = 0;
function jump(){
    character.addEventListener('keydown', function(){
        
    })
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout (function(){
        character.classList.remove("animate");
    },300);
}
const checkDead = setInterval(function(){
    let characterTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. Score: "+Math.floor (counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);