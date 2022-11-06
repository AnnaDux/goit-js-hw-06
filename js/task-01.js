"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

for(let categories of totalCategories){
  console.log ( `Category: ${categories.firstElementChild.textContent}`);
  console.log(`Elements:${categories.lastElementChild.childElementCount}`);


  // console.log (document.querySelector('h2').textContent);
}


// const totalCategoriestext= document.querySelector('h2');
// console.log(totalCategoriestext.textContent);

// let categoriesEl = document.getElementsByTagName('h2').textContent;
// console.log(categoriesEl);



// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);
