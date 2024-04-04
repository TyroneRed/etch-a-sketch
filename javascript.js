
let numPerSide = 16;
let containerSize = 960;

// create columns
for(let i=0; i<numPerSide; i++){
    container = document.querySelector('#container');
    column = document.createElement('div');
    column.classList = "column";
    container.appendChild(column);
};
// create cells
columns = document.querySelectorAll(".column");
columns.forEach((column) => {
    for(let j=0; j<numPerSide; j++){
        cell=document.createElement("div");
        cell.classList = "cell";
        cell.style.height = containerSize/numPerSide + "px";
        column.appendChild(cell);
    }
});

// add mouseover listener to each cell
cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener("mouseover", function colorCell(){
        cell.style.backgroundColor = "blue";
    });
});


