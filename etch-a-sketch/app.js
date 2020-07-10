// Initial variables
let defaultGridSize = 16;
let currentGridSize = defaultGridSize;
let drawColor = 'default';
const container = document.querySelector('#container');
const gridSection = document.querySelector('#gridSection');
const btnReset = document.querySelector('#btnReset');
const btnBlack = document.querySelector('#btnBlack');
const btnShade = document.querySelector('#btnShade');
const btnEraser = document.querySelector('#btnEraser');
const btn32 = document.querySelector('#btn32');
const btn48 = document.querySelector('#btn48');
const btn16 = document.querySelector('#btn16');

// button addEventListeners
btnReset.addEventListener('click', () => {
    createGrid(currentGridSize);
    drawColor = 'default';
});

btnBlack.addEventListener('click', () => {
    drawColor = 'black';
});

btnShade.addEventListener('click', (e) => {
    drawColor = 'shade';
});

btnRandom.addEventListener('click', (e) => {
    drawColor = 'random';
});

btnEraser.addEventListener('click', () => {
    drawColor = 'default';
});

btn32.addEventListener('click', () => {
    createGrid(32);
});

btn48.addEventListener('click', () => {
    createGrid(48);
});

btn16.addEventListener('click', () => {
    createGrid(16);
});

let form1 = document.querySelector('#form1');
form1.addEventListener('submit', (e) => {
    let formValue = form1.elements[0].value;
    form1.elements[0].value = "";
    createGrid(formValue);
});

// Initialize page at start to basic grid
createGrid(defaultGridSize);

function createGrid(gridSize){
    if(gridSize < defaultGridSize || gridSize > 100){ 
        gridSize = defaultGridSize;
        alert("Sorry, dimensions must range from 16 to 100!")
    }
    
    currentGridSize = gridSize;
    let numberOfDivs = gridSize * gridSize;
    let canvasSize = (600 / gridSize) + "px";
    
    gridSection.innerHTML = "";
    gridSection.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridSection.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < numberOfDivs; i++){
        let box = document.createElement('div');
        box.className = 'boxes';
        box.style.width = canvasSize;
        box.style.height = canvasSize;
        box.addEventListener('mouseover',changeColor);
        gridSection.appendChild(box);
    }
}

function changeColor(e) {

    if (drawColor == 'shade'){
        let bgc = window.getComputedStyle(e.target).backgroundColor;
        let col = bgc.replace(/[^\d,]/g,'').split(',');

        for( let i in col){
            col[i] -= Math.round(255 * .1);
            if (col[i] < 0){
                col[i] = 0;
            } 
        }
        e.target.style.backgroundColor = `rgb(${col[0]},${col[1]},${col[2]})`;
    }
    else if(drawColor == 'black'){     
        e.target.style.backgroundColor = 'black';
    }
    else if(drawColor == 'random'){
        let bgc = window.getComputedStyle(e.target).backgroundColor;
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    else {
        e.target.style.backgroundColor = 'white';
    }
}