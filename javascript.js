
let containerSize = 960;
let numPerSide = 16;

function createColumns() {
// create columns
    for(let i=0; i<numPerSide; i++){
        container = document.querySelector('#container');
        column = document.createElement('div');
        column.classList.add("column", "grid");
        container.appendChild(column);
};
};
function createCells() {
// create cells
columns = document.querySelectorAll(".column");
columns.forEach((column) => {
    for(let j=0; j<numPerSide; j++){
        cell=document.createElement("div");
        cell.classList.add("cell", "grid");
        cell.style.height = containerSize/numPerSide + "px";
        column.appendChild(cell);
    }
});
}

function addHoverEffect() {
// add mouseover listener to each cell to colorize background
cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener("mouseover", function colorCell(){
        cell.style.backgroundColor = "blue";
    });
});
};

createColumns();
createCells();
addHoverEffect();

squaresButton = document.querySelector("Button");
squaresButton.addEventListener("click", () => {
    numPerSide = prompt('How many squares per side of the grid do you want? ');
    gridElements = document.querySelectorAll('.grid');
    gridElements.forEach(gridElement => {gridElement.remove()});
    createColumns();
    createCells();
    addHoverEffect();
})


