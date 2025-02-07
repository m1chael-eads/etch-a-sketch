
const container = document.querySelector(".container");
for (i = 0; i < 16; i++) {
    j = 0;
    const row = document.createElement("div");
    row.classList.add("row");
    while (j < 16) {
        const block = document.createElement("div");
        block.textContent = `Block`;
        /*
        color = randomColor();
        block.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        */
        block.classList.add("block");
        row.appendChild(block);
        j++;
    }
    container.appendChild(row);
}


function randomColor() {
    return [(Math.random()*256).toFixed(),(Math.random()*256).toFixed(),(Math.random()*256).toFixed()].map(Number);
}





