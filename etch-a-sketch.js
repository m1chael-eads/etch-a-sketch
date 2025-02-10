
let currentDimension = 0;

function createGrid(d) {
    currentDimension = d;
    const container = document.querySelector(".container");
    for (i = 0; i < d; i++) {
        j = 0;
        const row = document.createElement("div");
        row.classList.add("row");
        while (j < d) {
            const block = document.createElement("div");
            block.addEventListener('mouseover', () => {block.style.backgroundColor = 'black';});
            /*
            color = randomColor();
            block.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
            */
            block.classList.add("block");
            row.appendChild(block);
            j++;
            console.log(j);
        }
        container.appendChild(row);
        console.log(i);
    }
    document.appendChild(container);
}

function deleteGrid() {
    const container = document.querySelector(".container");
    for(i = 0; i < currentDimension; i++) {
        const row = document.querySelector(".row");
        j = 0;
        while (j < currentDimension) {
            const block = document.querySelector(".block");
            row.removeChild(block);
            j++;
        }
        container.removeChild(row);
    }
    currentDimension = 0;
}

function randomColor() {
    return [(Math.random()*256).toFixed(),(Math.random()*256).toFixed(),(Math.random()*256).toFixed()].map(Number);
}

function getDimension() {
    let dimension = prompt("Choose your grid dimension");
    dimension = Number(dimension);
    return dimension;
}

function main() {
    if (currentDimension > 0) {
        deleteGrid();
    }
    dimension = getDimension();
    createGrid(dimension);
}



