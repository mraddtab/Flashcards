let studySets = document.querySelector("#studySets");
let createBtn = document.querySelector("#createBtn");


//This function will load the sets onto the homepage from local storage.
function loadSets(){
    const numOfSets = localStorage.getItem('set#');
    if(numOfSets > 0){
        for(let i = 1; i < numOfSets + 1; i++ ){
            let setData = JSON.parse(localStorage.getItem(i));
            let setTitle = setData[0]['title'];
            let setDiv = document.createElement('div');
            setDiv.classList.add('set');
            setDiv.textContent = setTitle;
            setDiv.addEventListener('click', openSet(i));
            studySets.prepend(setDiv);
        }
    }
}
loadSets();