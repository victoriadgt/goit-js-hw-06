// Selectăm lista de categorii
const categoriesList = document.querySelector('#categories');

// Numărăm categoriile
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

// Iterăm prin fiecare categorie
categories.forEach(category => {
  // Obținem titlul categoriei
  const title = category.querySelector('h2').textContent;
  
  // Numărăm elementele din categoria respectivă
  const elementsCount = category.querySelectorAll('ul > li').length;

  // Afișăm informațiile în consolă
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});