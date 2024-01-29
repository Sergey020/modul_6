const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newArray = ingredients.map(ingredient => {
 const itemofArray = document.createElement("li");
 itemofArray.textContent = ingredient;
 itemofArray.classList.add("item");
 //console.log(itemofArray);
 return itemofArray;
});
console.log(...newArray);
const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...newArray);
console.log(ulIngredients);