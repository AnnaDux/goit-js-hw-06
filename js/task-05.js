let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

function oninput () {
    if (input.value === '') {
       nameOutput.textContent = "Anonymous";
    } else{
    nameOutput.textContent = input.value;
    }
}

input.addEventListener("input", oninput);