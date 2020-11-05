function translateIntoWhale() {
let input = document.getElementById("myText").value;
const vowels = ['a', 'e', 'i', 'o', 'u', ' '];


const resultArray = [];


for (let i = 0; i <= input.length - 1; i++)
{
  for (let j = 0; j <= vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
    if ((input[i] === 'e') || (input[i] === 'u')) {
      resultArray.push(input[i]);
  }
  
  document.getElementById("game").innerHTML = (resultArray.join('').toUpperCase()+ '!');
  
}
}

const restart = document.getElementById("restart");

restart.addEventListener('click', () => {
  document.getElementById("game").innerHTML = "Let's Translate?";
})