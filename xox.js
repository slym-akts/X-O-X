const boxs = document.querySelectorAll(".box");
const playerT=document.getElementById("player");
const errorT=document.getElementById("error");
let player="X";

function click(box) {
    box.textContent=player;
    playerTurn();
    }

function playerTurn() {
    if (player==="X") {
        player="O";
        playerT.textContent=player+"'s Turn !" ;
        return;}
    else if (player==="O") {
        player="X";
        playerT.textContent=player+"'s Turn !" ;
        return;
    }    
}




function startGame() {
    playerT.textContent= player+"'s Turn !" ;
    boxs.forEach(box=>box.addEventListener("click",()=> click(box)));
}


startGame();