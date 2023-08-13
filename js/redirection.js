function agregarguiones(text){
    
  let str = text;
let result = str.split(" ").join("_");
return result;
}
function removeNumbersWithDots(inputText) {
const regex = /\d+\.\s/g; // Expresión regular para encontrar números seguidos de un punto y espacio
const replacedText = inputText.replace(regex, ''); // Reemplazar los números con punto y espacio por nada
return replacedText;
}


function redirectToLichessAnalysis() {
  
  let text = document.getElementById('PgnTextBox').value;
  
  let transformedText = agregarguiones(removeNumbersWithDots(text));
  let lichessURL = `https://lichess.org/analysis/pgn/${transformedText}`;
 location.href = lichessURL;
}
