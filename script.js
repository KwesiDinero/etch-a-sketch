console.log("UP and Running")
let defaultGrid = 16;
const container = document.querySelector('canvas-container');

function Size(defaultGrid){
    for(let i =0; i<defaultGrid*defaultGrid; i++){
        const squares = document.createElement('div');
        squares.classList.add('every-single-square');
        container.appendChild(squares);
    }

}

const effectsAndModes = document.querySelector('.effects-and-modes');
const btnNormalMode = document.createElement('button');
const btnRandomColorMode = document.createElement("button");
const btnEraserMode = document.createElement("button");
const btnReset= document.createElement("button");
btnNormalMode.textContent= "Normal Mode";
console.log(btnNormalMode)
effectsAndModes.append(btnNormalMode);
/*effectsAndModes.appendChild(btnRandomColorMode);
effectsAndModes.appendChild(btnEraserMode);
effectsAndModes.appendChild(btnReset);*/