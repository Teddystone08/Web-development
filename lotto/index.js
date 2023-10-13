max = 100
min = 1
const btnEl = document.querySelector('.btn')
const lotto = Math.floor(Math.random() * (max - min + 1)) + min;

let draw = [];


btnEl.addEventListener('click',() => { 
   if (lotto > 0 || lotto < 100){

    draw.push(lotto)
    
   }

   console.log(draw)


   function countCombinations() {
      const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
       combinations = [];
      const targetSum = 200;
    
      // Generate all possible combinations of 5 numbers from the range 1 to 100
      function generateCombinations(arr, startIndex, currentCombination) {
        if (currentCombination.length === 5) {
          const sum = currentCombination.reduce((acc, val) => acc + val, 0);
          if (sum === targetSum) {
            combinations.push([...currentCombination]);
          }
          return;
        }
    
        for (let i = startIndex; i < arr.length; i++) {
          currentCombination.push(arr[i]);
          generateCombinations(arr, i + 1, currentCombination);
          currentCombination.pop();
        }
      }
    
      generateCombinations(numbers, 0, []);
    
      // Calculate the total number of combinations
      const totalCombinations = Math.pow(numbers.length, 5);
    
      // Calculate the probability
      const probability = combinations.length / totalCombinations;
    
      return probability;
    }
    
    // Calculate and print the probability
    const probability = countCombinations();
    console.log("Probability:", probability);
    console.log(combinations)

});






    






//console.log(lotto)

