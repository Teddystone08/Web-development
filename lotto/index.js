
const btnEl = document.querySelector('.btn')


let draw = [];

btnEl.addEventListener('click',() => { 
 // Function to generate an array from 1 to n
function generateArray(n) {
  return Array.from({ length: n }, (_, index) => index + 1);
}

// Function to randomly select k elements from an array
function randomSelection(arr, k) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, k);
}

const numbersArray = generateArray(100);
const randomFiveElements = randomSelection(numbersArray, 5);

console.log(randomFiveElements);


  
});

