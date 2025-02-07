
const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const block = document.createElement("div");
    block.textContent = `Block`;
    /*
    UNCOMMENT FOR RANDOM COLOR BLOCKS...
    color = randomColor();
    block.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    */
    block.classList.add("block");
    container.appendChild(block);
}


function randomColor() {
    return [(Math.random()*256).toFixed(),(Math.random()*256).toFixed(),(Math.random()*256).toFixed()].map(Number);
}





