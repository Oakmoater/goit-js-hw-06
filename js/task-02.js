const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector(`#ingredients`);
const result = ingredients.map(ingredient => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
})
ingredientsList.append(...result);

// альтернатива за допомогою forEach()
// ingredients.forEach(ingredient => {
//   const li = document.createElement(`li`);
//   li.textContent = ingredient;
//   li.classList.add('item');
//   ingredientsList.append(li);
// });
