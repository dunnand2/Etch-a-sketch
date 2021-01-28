const gridContainer = document.querySelector("#grid-container");
createGrid(16);

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
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
    gridContainer.style.gridTemplateColumns="repeat(" + gridSize + ", 1fr)";
}

function clearSketch() {
    let gridCells = gridContainer.getElementsByClassName("gridCell");
    let i;
    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].className ="gridCell";
    }
    promptUserGridSize();
}

function promptUserGridSize() {
    let userGridInput = prompt("Enter your desired grid size", "16");
    let userGridSize = parseInt(userGridInput);
    if (isNaN(userGridSize)){
        promptUserGridSize();
    }
    else if(userGridSize < 1 || userGridSize > 100) {
        promptUserGridSize();
    }
    else{
        gridContainer.innerHTML = "";
        createGrid(userGridSize);
    }

}

function onOver(node){
    node.className = node.className + ' Hover';
}

function onOut(node){
    node.className = node.className.replace('Hover', '');
}

