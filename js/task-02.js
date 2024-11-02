const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Selectăm lista <ul> unde vom adăuga ingredientele
const ingredientsList = document.querySelector('#ingredients');

// Creăm un array pentru a stoca elementele <li>
const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li'); // Creăm un element <li>
  listItem.textContent = ingredient; // Adăugăm numele ingredientului ca text
  listItem.classList.add('item'); // Adăugăm clasa 'item'
  return listItem; // Returnăm elementul <li>
});

// Inserăm toate elementele <li> în lista <ul> într-o singură operație
ingredientsList.append(...listItems);