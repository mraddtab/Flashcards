
let front = document.querySelector("#FC-front");
let back = document.querySelector("#FC-back");
let currentSide = "front";
let data = JSON.parse(localStorage.getItem(setNumber));
let terms = data.keys();
let currentCard = 1;
//This function will load the set
function openSet(setNumber){
    front.textContent = Object.keys(data[currentCard])[0];
    back.textContent = Object.keys(data[currentCard])[0];
}