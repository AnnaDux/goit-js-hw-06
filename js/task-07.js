let fontSizeControl = document.getElementById("font-size-control");
let text = document.getElementById("text");

fontSizeControl.addEventListener('input', event=>{
 text.style.fontSize = fontSizeControl.value +"px";
}) 

// let controlFont = document.getElementById("font-size-control");
// let text = document.getElementById("text");

// controlFont.oninput = function() {
//   text.style.fontSize = controlFont.value + "px";
// };