const gridContainer = document.querySelector("#grid-container");
createGrid();

function createGrid() {
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let newGridCell = document.createElement("div");
            newGridCell.className = "gridCell";
            newGridCell.addEventListener("mouseover", e => {
                newGridCell.className = newGridCell.className + ' Hover';
            });
            /*newGridCell.addEventListener("mouseout", e => {
                newGridCell.className = newGridCell.className.replace('Hover', '');
            });*/
            gridContainer.appendChild(newGridCell);
        }
    }
}

function clearSketch() {
    let gridCells = gridContainer.getElementsByClassName("gridCell");
    let i;
    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].className ="gridCell";
    }
}

function onOver(node){
    node.className = node.className + ' Hover';
}

function onOut(node){
    node.className = node.className.replace('Hover', '');
}

