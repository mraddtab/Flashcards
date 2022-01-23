let studySets = document.querySelector("#studySets");
let createBtn = document.querySelector('#createBtn');
let currentSet = -1;
//This function will load the sets onto the homepage from local storage.
function loadHome(){
    const numOfSets = localStorage.getItem('set#');
    if(numOfSets > 0){
        for(let i = 1; i <= numOfSets; i++ ){
            let setData = JSON.parse(localStorage.getItem(i));
            let setTitle = setData[0]['title'];
            let set = document.createElement('div');
            let setDelete = document.createElement('span');
            let setLink = document.createElement('a');
            setDelete.classList.add('setDelete');
            setDelete.textContent = "X"
            setDelete.addEventListener('click', () => deleteSet(i, set));
            setLink.classList.add('setLink');
            set.classList.add('set');
            setLink.textContent = setTitle;
            setLink.href = 'flashcard.html';
            setLink.addEventListener('click', () => loadSetData(i));
            set.appendChild(setDelete);
            set.appendChild(setLink);
            studySets.removeChild(createBtn);
            studySets.appendChild(set);
            studySets.appendChild(createBtn);
    
        }
    }
}
function renameKey(obj, old_key, new_key) {   
    // check if old key = new key  
        if (old_key !== new_key) {                  
           Object.defineProperty(obj, new_key, // modify old key
                                // fetch description from object
           Object.getOwnPropertyDescriptor(obj, old_key));
           delete obj[old_key];                // delete old key
           }
    }
//Executes when the delete button is clicked, removes set data from localStorage.
function deleteSet(setNumber, div){
    studySets.removeChild(div);

}
//Executes when a set is slected from home,loads the terms, definition of the chosen set.
function loadSetData(setNumber){
    console.log(setNumber);
    currentSet = setNumber;
    let terms = [];
    let definitions = [];   
    let data = JSON.parse(localStorage.getItem(currentSet));
    let title = data[0]['title'];
    for(let i = 1; i < data.length; i++){
        let term = Object.keys(data[i])[0];
        let definition = (data[i])[term];
        terms.push(term);
        definitions.push(definition);
    }
    localStorage.setItem('currentTitle', title);
    localStorage.setItem('currentTerms', JSON.stringify(terms));
    localStorage.setItem('currentDefinitions', JSON.stringify(definitions));
    localStorage.setItem('currentSet', setNumber);
}
//main
loadHome();

/* <div class = "set">
    <span class = "setDelete"> X</span>
    <a href="" class = "setLink">History</a>
</div> */