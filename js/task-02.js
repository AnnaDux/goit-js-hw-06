const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let fragment = new DocumentFragment();
for (let i=0; i<5; i++){
  const elLi = document.createElement('li');
  elLi.classList.add("item");
  elLi.textContent = ingredients[i];
  fragment.appendChild(elLi);
}
document.querySelector('#ingredients').append(fragment);
console.log(list.textContent);

//  const arrayIngredients = [...ingredients];
//  console.log(arrayIngredients);

//  for (let ingredient of arrayIngredients){
//   document.createElement('li');

//   console.log(ingredients);
//  }
 


// const arrayIngredients = document.querySelector(#ingredients);
// // for(let ingredient of arrayIngredients){
// //   ingredient.createElement('li');

// // }
// console.log(arrayIngredients);