const gridContainer = document.querySelector('.grid-container');

let gridSize = 256;

function updateGridSize() {
  const gridButtonElement = document.querySelector('.js-grid-button');
  gridButtonElement.addEventListener('click', () => {
    let newSize = prompt('Insert a grid size');
    newSize = parseInt(newSize);
    console.log(newSize);
    if (newSize > 0) {
      gridSize = newSize * newSize;
      gridContainer.style.height = (52 * newSize) + 'px';
      gridContainer.style.width = (52 * newSize) + 'px';
      createDiv();
    } else {
      alert('Please enter a valid number');
    }
  })
}

updateGridSize();

function createDiv() {
  gridContainer.innerHTML = '';
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
  }
  const gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
}
createDiv();