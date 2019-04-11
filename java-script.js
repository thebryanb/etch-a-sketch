function updateGrid(size) {
    main.style.setProperty('--numCols', size);
    main.style.setProperty('--numRows', size);
}
function populateGrid(size) {
    const numDivs = size*size;
    for (i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('java-div')
        div.setAttribute('id','jdiv'+i)
        main.appendChild(div);
        colorArray[i] = 100;
    }
    divArray = document.querySelectorAll('div.java-div');
    window.addDivListeners();
}
function addDivListeners() {
    divArray.forEach(function(element) {
        element.addEventListener('mouseover',changeColor);
    });
}
function changeColor(e) {
    // let a = Math.round(Math.random()*254);
    // let b = Math.round(Math.random()*254);
    // let c = Math.round(Math.random()*254);
    let divId = Number(e.target.id.slice(4));
    if(colorArray[divId] > 0) {
        colorArray[divId] -= 20;
    }   
    e.target.style.cssText = 'background: rgb(0%,0%,'+colorArray[divId]+'%);';
}
function clearGrid() {
    divArray.forEach(function(element) { 
        element.style.background = 'none';
    });
    for(let i=0; i<colorArray.length; i++) {
        colorArray[i] = 100;
    }
}
function resizeGrid() {
    const newSize = Number(prompt('How many squares per side?'));
    divArray.forEach(function(element) {
        main.removeChild(element);
    });
    console.log(newSize);
    window.updateGrid(newSize);
    window.populateGrid(newSize);
}

let btnClear = document.getElementById('clear-btn');
let btnResize = document.getElementById('resize-btn');
btnClear.addEventListener('click', clearGrid);
btnResize.addEventListener('click', resizeGrid);

const main = document.querySelector('main');
let divArray;
let colorArray = [];
window.populateGrid(4);






