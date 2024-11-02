// Declaram o variabilă pentru a stoca valoarea contorului
let counterValue = 0;

// Selectam elementele din DOM
const valueDisplay = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

// Funcție pentru actualizarea interfeței
const updateDisplay = () => {
  valueDisplay.textContent = counterValue; // Actualizăm textul span-ului cu noua valoare
};

// Adăugăm event listeners pentru butoane
decrementButton.addEventListener('click', () => {
  counterValue -= 1; 
  updateDisplay(); 
});

incrementButton.addEventListener('click', () => {
  counterValue += 1; 
  updateDisplay(); 
});

// Inițializăm interfața cu valoarea inițială
updateDisplay();