const boxs = document.querySelectorAll(".box");
const playerT=document.getElementById("player");
const errorT=document.getElementById("error");

let player="X";
let gameOver = false;
let winner;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey
    [0, 4, 8], [2, 4, 6]             // Çapraz
  ];

function click(box) {
    if (box.textContent==="") {
        box.textContent=player;    
        playerTurn();
        
    }
    else{
        errorT.textContent="Box is full"
        box.style.border="2px solid red"
        setTimeout(()=>{errorT.textContent=""
                box.style.border="1px solid black"
    },2500);
    }
    win();
    if (gameOver) {
        playerT.textContent= "Game Over! ,"+ player+"WON !!!";
        boxs.forEach(box=>box.style.pointerEvents="none");
    }
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

function win() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        console.log(`Checking combination: ${a}, ${b}, ${c}`);
        console.log(`Values: ${boxs[a].textContent}, ${boxs[b].textContent}, ${boxs[c].textContent}`);
        
        if (boxs[a].textContent !== '' && boxs[a].textContent === boxs[b].textContent && boxs[a].textContent === boxs[c].textContent) {
            gameOver=true;
            return console.log(boxs[a].textContent);
             // Kazanan 'X' veya 'O' döndür
        }
        
    }
    
    
}




function startGame() {
    playerT.textContent= player+"'s Turn !" ;
    boxs.forEach(box=>box.addEventListener("click",()=> click(box)));
}


startGame();