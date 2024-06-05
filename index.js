let boxes = document.querySelectorAll('.box');
let turnO = false;
let count = 0;
let isWinner = false;
let msg = document.querySelector('.msg');
let msgContainer = document.querySelector('.msg-container');
let resetBtn = document.querySelector('.reset');
let newGame = document.querySelector('.newGame');

let winningElements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', (evt) => {
        addSymbol(evt.target);
    });
});

function addSymbol(element){
    if(turnO){
        element.innerText = 'O';
        turnO = false;
    }
    else{
        element.innerText = 'X';
        turnO = true;
    }
    element.disabled = true;
    count++;

    winnerCheck();
    if(isWinner){
        msg.innerText = `Winner is ${element.innerText}`;
        displayMsg();
        disableAll();
    }

    if(count === 9 && !isWinner){
        msg.innerText = 'Game Is Draw';
        displayMsg();
    }
}

function winnerCheck(){
    winningElements.forEach((elements) => {
        if(boxes[elements[0]].innerText !== "" && boxes[elements[1]].innerText !== "" && boxes[elements[2]].innerText !== ""){
            
            if((boxes[elements[0]].innerText === boxes[elements[1]].innerText) && (boxes[elements[1]].innerText === boxes[elements[2]].innerText)){
                isWinner = true;
            }
        }
    })
}

function displayMsg(){
    msgContainer.classList.remove('hide');
}

function disableAll(){
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

function enableAll(){
    turnO = false;
    count = 0;
    isWinner = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}

resetBtn.addEventListener('click', () => {
    enableAll();
    msgContainer.classList.add('hide');
});
newGame.addEventListener('click', () => {
    enableAll();
    msgContainer.classList.add('hide');
});