const sketchBox = document.querySelector("#container");
const currentColorButton = document.querySelector("#currentColor");
const randomColorButton = document.querySelector("#colorRandom");
const colorPicker = document.querySelector("#colorPicker");
const sizingBtn = document.querySelector("#sizingBtn");
const gridSize = document.querySelector("#gridSize");
const label = document.querySelector("#sizeText");
const clearBoardBtn = document.querySelector("#clearBoardBtn");
let randomColorMode = false;

let currentColor = colorPicker.value;

function clearSketchBox() {
    while (sketchBox.firstChild) {
        sketchBox.removeChild(sketchBox.firstChild);
    }
}

function createRow() {
    clearSketchBox();
    for (let i = 0; i < gridSize.value; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("box");

        for (let j = 0; j < gridSize.value; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.border = "1px solid black";

            box.addEventListener("mouseover", () => {
                if (randomColorMode === true) {
                    box.style.backgroundColor = getRandomColor();
                } else {
                    box.style.backgroundColor = currentColor;
                }
            });
            clearBoardBtn.addEventListener("click", () => {
                box.style.backgroundColor = "#FFF";
            });
            rowContainer.appendChild(box);
        }
        sketchBox.appendChild(rowContainer);
    }
}

function getRandomColor() {
    const poss = '0123456789ABCDEF';
    let hexColor ="#";
    for (let i = 0; i < 6; i++){
        hexColor += poss[Math.floor(Math.random() * 16)];
    }
    return hexColor;
};

sizingBtn.addEventListener("click", () => {
    createRow();
});

currentColorButton.addEventListener("click", () =>{
    if(randomColorMode === false) {
        currentColor = colorPicker.value;
    } else {
        randomColorMode = false;
        currentColor = colorPicker.value;
        createRow();}
});

randomColorButton.addEventListener("click", () => {
    randomColorMode = true;
});

clearBoardBtn.addEventListener("click", () => {
    randomColorMode = false; // Reset random color mode
    createRow();
});
