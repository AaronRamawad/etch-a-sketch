function main() {
    const container = document.querySelector(".container");

    const GRID_SIZE = 4;

    for (let i = 0; i < GRID_SIZE; i++) {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        for (let j = 0; j < GRID_SIZE; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "grid-square");
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }


}

main();