const gridContainer = document.querySelector('.grid-container');

function createDiv() {
  gridContainer.innerHTML = '';
  for (i = 0; i < 256; i++) {
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