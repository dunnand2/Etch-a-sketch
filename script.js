const gridContainer = document.querySelector("#grid-container");
createGrid();

function createGrid() {
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let newGridCell = document.createElement("div");
            newGridCell.className = "gridCell";
            gridContainer.appendChild(newGridCell);
        }
    }
}