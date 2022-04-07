let size = 16;
const gridContainer = document.querySelector('grid_container');
let mouseDown = false;
let color = 'black';

function createDiv(size) {
    const pixel = document.createElement('div');
    pixel.style.width = `${100/size}%`; 
    pixel.style.height = `${100/size}%`; 
    pixel.classList.add('pixel');
    return pixel;
}

function createPad(size) {
    //create size**2 amount of divs to throw into a container
    for (let i = 0; i < size**2; i++) {
        gridContainer.appendChild(createDiv(size));
    }
}

function draw(e) {
    if (e.type == 'mouseover' && !mouseDown) return;
    if (e.target.classList.contains("pixel")) e.target.style.backgroundColor = color;
}

function resetGrid(e) {
    size = prompt('What size grid do you want? Max of 100.')
    console.log(size);
    clearGrid();
    createPad(size);
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function updateColor(e) {
    color = e.target.value;
}

createPad(size);

window.addEventListener('mousedown', () => mouseDown = true);
window.addEventListener('mouseup', () => mouseDown = false);

gridContainer.addEventListener('mouseover', draw);
gridContainer.addEventListener('mousedown', draw);

const resetButton = document.querySelector("button.reset");
resetButton.addEventListener('click', resetGrid);

const colorPicker = document.querySelector(".colorpicker");
colorPicker.addEventListener('change', updateColor);

