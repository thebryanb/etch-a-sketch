const main = document.querySelector('main');
for (i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('java-div')
    main.appendChild(div);
}

function changeColor(e) {
    console.log(e.target);
    e.target.style.cssText = "background: blue;";
}


let divArray = document.querySelectorAll('div');
divArray.forEach(function(element) {
    element.addEventListener('mouseover',changeColor);
});


