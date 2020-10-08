//grid
const grid = document.querySelector("#grid");

/*
function createGrid() {
    document.getElementById("squares").submit();
    let numb = numb;
    return addSquares();
}
*/

//creates squares
function addSquares(numb = 16) {
    grid.style.gridTemplateColumns = `repeat (${numb}, 1fr)`;
    grid.style.gridTemplateRows = `repeat (${numb}, 1fr)`;
    let sum = numb * numb;
    for (let i = 0; i < sum; i++) {
        const squares = document.createElement("div");
        squares.setAttribute("id", "square");
        squares.addEventListener("mouseover", mouseOver);
        function mouseOver(){
            squares.style.background = "linear-gradient(120deg, white, blue)";
        }
        grid.appendChild(squares);
    } return;
}





/*
numb is an input variable from the user
since it's a variable that's global, we should be able to play around with it

user inputted 'numb' will create that number of rows/columns (not squares?)

the inputted 'numb' means that number of squares going across and down, to make the grid

the grid must allow the squares to cover it, not overflow or vice versa. they must fit.

squares' width & height is auto so long as they fill the space they're in

so numb = columns/rows
*/