const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");

let fragment = new DocumentFragment();
for (let i=0; i<5; i++){
  const elLi = document.createElement('li');
  elLi.classList.add("item");
  elLi.textContent = ingredients[i];
  fragment.appendChild(elLi);
}
document.querySelector('#ingredients').append(fragment);

