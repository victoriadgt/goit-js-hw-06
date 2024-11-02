
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Adăugăm un event listener pentru evenimentul input
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value; 
  });