const gridContainer = document.querySelector('.grid-container');

let gridSize = 256;

// Function to allow the user to adjust the grid size when clicking the change grid size button
function updateGridSize() {
  const gridButtonElement = document.querySelector('.js-grid-button');
  gridButtonElement.addEventListener('click', () => {
    let newSize = prompt('Insert a grid size');
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
      gridSize = newSize * newSize;
      createDiv();
    } else {
      alert('Please insert a grid size (1-100)');
    }
  })
}

updateGridSize();

// Function to generate the grid divs inside grid container
function createDiv() {
  gridContainer.innerHTML = '';
  const containerWidth = gridContainer.clientWidth;
  const gridSizePerRow = Math.sqrt(gridSize);
  const itemSize = Math.floor(containerWidth / gridSizePerRow);
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${itemSize}px`;
    div.style.height = `${itemSize}px`;
    gridContainer.appendChild(div);
  }
  const gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = randomColor();        
    });
  });
}

// Function to generate a random color 
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`
}

createDiv();