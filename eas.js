//grid
const grid = document.querySelector("#grid");

//creates a RAINBOW
function rainbow() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let color = `${first}, ${second}, ${third}`
    return color;
}

//creates squares
function addSquares(numb) {
    let sum = numb * numb;
    grid.style.gridTemplateColumns = `repeat(${numb}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numb}, 1fr)`;
    for (let i = 0; i < sum; i++) {
        const squares = document.createElement("div");
        squares.setAttribute("id", "square");
        squares.addEventListener("mouseover", mouseOver);
        function mouseOver(){
            squares.style.background = `linear-gradient(120deg, rgb(${rainbow()}), rgb(${rainbow()}))`;
        }
        grid.appendChild(squares);
    } return;
}

//clears the board
function clearBoard() {
    for (let i = 0; i < 4096; i++) {
        const squares = document.querySelector("#square");
        squares.style.background = "linear-gradient(120deg, gray, white)";
        grid.appendChild(squares);
    } return;
}

//runs default grid of 16x16
addSquares(16)

//2x2 button
const two = document.querySelector("#two");
two.addEventListener('click', () => {
    addSquares(2);
});

//8x8 button
const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    addSquares(8);
});

//16x16 button
const sixteen = document.querySelector("#sixteen");
sixteen.addEventListener('click', () => {
    addSquares(16);
});

//36x36 button
const thirtysix = document.querySelector("#thirtysix");
thirtysix.addEventListener('click', () => {
    addSquares(36);
});

//64x64 button
const sixtyfour = document.querySelector("#sixtyfour");
sixtyfour.addEventListener('click', () => {
    addSquares(64);
});

//new board button
const clear = document.querySelector("#zero");
clear.addEventListener('click', clearBoard);