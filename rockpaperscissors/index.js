const choices=["rock","paper","scissors"];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerscoredisplay=document.getElementById("playerscore");
const computerscoredisplay=document.getElementById("computerscore");
let playerscore=0;
let computerscore=0;
function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    result="";
    
    if(playerchoice===computerchoice){
        result="It's a Tie";
    }
    else{
        switch(playerchoice){
            case 'rock': 
            result=(computerchoice==='scissors') ? "YOU WIN!" : "YOU LOSE!";
            break;
            case 'paper': 
            result=(computerchoice==='rock') ? "YOU WIN!" : "YOU LOSE!";
            break;
            case 'scissors': 
            result=(computerchoice==='paper') ? "YOU WIN!" : "YOU LOSE!";
            break;
        }
    }
    playerdisplay.textContent=`Player:${playerchoice}`;
    computerdisplay.textContent=`Computer:${computerchoice}`;
    resultdisplay.textContent=result;
    resultdisplay.classList.remove("greentext","redtext");
    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent=playerscore;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent=computerscore;
            break;
    }
}