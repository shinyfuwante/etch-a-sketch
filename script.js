const SIZE = 32;
const gridContainer = document.querySelector('grid_container');
for (let i = 0; i < SIZE**2; i++) {
    const pixel = document.createElement('div');

    if (i%3 == 1) pixel.style.backgroundColor = 'yellow';
    else if (i%2 == 1) pixel.style.backgroundColor = 'blue'; 
    else pixel.style.backgroundColor = 'red';

    pixel.style.width = `${100/SIZE}%`; 
    pixel.style.height = 'auto';


    gridContainer.appendChild(pixel);
}

