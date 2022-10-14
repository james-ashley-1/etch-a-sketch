"use strict";

const grid = document.querySelector('.grid-container');
const createGridBtn = document.querySelector('button.create-grid');
const gridItem = document.querySelector('.grid-container div');

const blueBtn = document.querySelector('button.blue');
const redBtn = document.querySelector('button.red');
const randomBtn = document.querySelector('button.random');
const eraserBtn = document.querySelector('button.eraser');

blueBtn.addEventListener('click', () => changeColor('blue'));
redBtn.addEventListener('click', () => changeColor('red'));
randomBtn.addEventListener('click', () => changeColor('random'));
eraserBtn.addEventListener('click', () => changeColor('white'));


let currentColor = 'black';

// createGridBtn.addEventListener('click', createGrid);

// lets create a grid
function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-square');
    grid.append(gridItem);
  }
}

createGrid(256);

grid.addEventListener('mouseout', event => {
  if (currentColor === 'random') {
    colorSquare(event, generateRandomColor());
  } else {
    colorSquare(event, currentColor);
  }
});

function generateRandomColor(){
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function colorSquare(elem, color) {
  if (elem.target.classList == 'grid-square') {
    let square = elem.target;
    square.style.backgroundColor = color;
  }
}

function changeColor(color) {
  currentColor = color;
}
