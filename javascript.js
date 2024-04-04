
let numPerSide = 16;
let containerSize = 960;
for(let i=0; i<numPerSide; i++){
    container = document.querySelector('#container');
    column = document.createElement('div');
    column.classList = "column";
    container.appendChild(column);
};

columns = document.querySelectorAll(".column");
columns.forEach((column) => {
    for(let j=0; j<numPerSide; j++){
        cell=document.createElement("div");
        cell.classList = "cell";
        cell.style.height = containerSize/numPerSide + "px";
        column.appendChild(cell);
    }
});
