function updateGrid(size) {
    main.style.setProperty('--numCols', size);
    main.style.setProperty('--numRows', size);
}
function populateGrid(size) {
    const numDivs = size*size;
    for (i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('java-div')
        main.appendChild(div);
    }
    divArray = document.querySelectorAll('div.java-div');
    window.addDivListeners();
}
function addDivListeners() {
    divArray.forEach(function(element) {
        element.addEventListener('mouseover',changeColor);
    });
}
function changeColor(e, color='blue') {
    // console.log(e.target);
    e.target.style.background = color;
}
function clearGrid() {
    console.log('clear grid')
    divArray.forEach(function(element) { 
        element.style.background = 'none';
    });
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
window.populateGrid(4);






