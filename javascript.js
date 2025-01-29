const gridContainer = document.querySelector('.grid-container');

function createDiv() {
  for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
  }
}

createDiv();