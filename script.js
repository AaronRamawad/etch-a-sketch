function main() {
    const container = document.querySelector(".container");
    const sizeInput = document.querySelector("input");

    

    let gridSize;
    if (sizeInput.value === "" || +sizeInput.value < 0 || +sizeInput.value > 100) {
        gridSize = 16;
    } else {
        gridSize = +sizeInput.value;
    }

    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");
        for (let j = 0; j < gridSize; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "grid-square");

            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = "rgb(0,0,0)";
            })

            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    }

    sizeInput.addEventListener("input", () => {
        container.innerHTML = "";
        main();
    })
}

main();