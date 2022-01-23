let cardContainer = document.querySelector("#FC");
let front = document.querySelector("#front");
let back = document.querySelector("#back");
const resetBtn = document.querySelector('#reset');
const backBtn = document.querySelector('#goBack');
const forwardBtn = document.querySelector('#goForward');
const shuffleBtn = document.querySelector('#shuffle');
const title = document.querySelector("#headerText");
const count = document.querySelector('#current');
const total = document.querySelector('#total');
let currentSide = "front"; //or 'back'.
let currentCard = 0;
let terms = JSON.parse(localStorage.getItem('currentTerms'));
let definitions = JSON.parse(localStorage.getItem('currentDefinitions'));
let currentSet = localStorage.getItem('currentSet');

title.textContent = localStorage.getItem('currentTitle');

//This function update flashcard.html
function loadFlashCards(){
    front.textContent = terms[currentCard];
    back.textContent = definitions[currentCard];
    count.textContent = currentCard + 1 +'/';
    total.textContent =  terms.length;
}
//Flashcard functions.
function flip(){
    if(currentSide == 'front'){
        currentSide = 'back'
        cardContainer.style.transform = "rotateY(180deg)";       
    }
    else{
        currentSide = 'front';
        cardContainer.style.transform = "rotateY(0deg)";
    }
}

function reset(){
    currentCard = 0;
    currentSide = "front";
    loadFlashCards();
}

function goBack(){
    if(currentCard > 0){
        currentCard -=1;
        currentSide = "front";
        front.style.transitionDuration = '0.1s'
        front.style.transform = 'translate(-1300px, 0px)';
        setTimeout(() =>{
            front.style.transitionDuration = '0s';
            front.style.transitionDelay = '0.12s';
            front.style.transform = 'translate(1300px, 0px)';
            
        }, 125)
        setTimeout(()=>{
            front.style.transitionDelay = '0s';
            front.style.transitionDuration = '0.12s'
            front.style.transform = 'translate(0px, 0px)';
        }, 250)
        loadFlashCards();
    }
}
function goForward(){
    if(currentCard < terms.length - 1){
        currentCard +=1;
        currentSide = "front";
        front.style.transitionDuration = '0.1s'
        front.style.transform = 'translate(1300px, 0px)';
        setTimeout(() =>{
            front.style.transitionDuration = '0s';
            front.style.transitionDelay = '0.12s';
            front.style.transform = 'translate(-1300px, 0px)';
            
        }, 125)
        setTimeout(()=>{
            front.style.transitionDelay = '0s';
            front.style.transitionDuration = '0.12s'
            front.style.transform = 'translate(0px, 0px)';
        }, 250)
        loadFlashCards();
    }
}
function shuffle(){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
resetBtn.addEventListener('click', reset);
backBtn.addEventListener('click',goBack);
forwardBtn.addEventListener('click', goForward);
shuffleBtn.addEventListener('click', shuffle);
cardContainer.addEventListener('click',flip);
loadFlashCards();