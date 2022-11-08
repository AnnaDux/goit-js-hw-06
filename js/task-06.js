const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})





// document.getElementById("validation-input").onblur = function() {
//     console.log(this.value.length);
//     if (this.getAttribute('data-length') === this.value.length) { 
//       this.classList.add('valid');
//       this.classList.remove('invalid');
//     } else {
//       this.classList.remove('invalid');
//       this.classList.add('valid');
//     }
//   };

// let input = document.getElementById("validation-input");
// let totalLenght = input.dataset.length;



// input.onblur = function (){
//     if(this.value.length === totalLenght){
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     }
//     else if (this.value.length === 0){
//         this.classList.remove('invalid');
//         this.classList.remove('valid');
//     }
//     else if (this.value.length !== totalLenght && this.value.length !== 0) {
//         this.classList.add('invalid');
//     }

// }




// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");
// let intTotallenght = parseInt(totalLenght, 10);

// inputVal.oninput = function() {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// };