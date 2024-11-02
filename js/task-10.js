function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funcția pentru a crea cutii
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  const boxes = []; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div'); 
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    boxes.push(box); 
  }

  boxesContainer.append(...boxes); 
};

// Funcția pentru a distruge cutiile
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');


createButton.addEventListener('click', () => {
  const amount = Number(input.value); 
  if (amount > 0) {
    createBoxes(amount); 
  }
});


destroyButton.addEventListener('click', () => {
  destroyBoxes(); 
});