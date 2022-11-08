
const decrement = document.querySelector("[data-action='increment']");
const increment = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

let counterValue = 0;
function plus (){
    counterValue+=1;
    value.textContent = counterValue;
    
}
function minus(){
    counterValue-=1;
    value.textContent = counterValue;
    
}

decrement.addEventListener("click", plus);
increment.addEventListener("click", minus);