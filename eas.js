//grid
const grid = document.querySelector("#grid");

//creates squares
function addSquares(numb = 16) {
    let sum = numb * numb;
    for (let i = 0; i < sum; i++) {
        const squares = document.createElement("div");
        squares.classList.add("square");
        grid.appendChild(squares);
    } return;
} 