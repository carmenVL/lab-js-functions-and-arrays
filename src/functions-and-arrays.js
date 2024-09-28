// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    let max = num1;

    for (let i = 0; i < 1; i++) {
        if (num2 > max) {

            max = num2;

        }
    }

    return max;
}

console.log(maxOfTwoNumbers(7, 47));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    if (words.length === 0){
        return null;
    }

    let longestWord = [0];

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }

    }

    return longestWord;
}

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

if (numbers.length === 0){
    return 0;
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    sum += numbers[i];

}

return sum;

}


console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(numbers) {
    
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
    
        sum += numbers[i];
    
    }
    
    return sum;
    
    }
    

function averageNumbers(numbers) {

    if (numbers.length === 0){
        return 0;
    }

    let sum = sumNumbers(numbers);

    let average = sum / numbers.length;

    return average;

}

console.log(averageNumbers(numbers));


// Iteration 5 | Find Elements

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {

    if (words.length === 0) {
        return null;
    }


    for (let i = 0; i < words.length; i++) {

        if (words[i] === wordToSearch) {
            return true;
        }
    }

    return false;
}


console.log(doesWordExist(words2, "matter")); 
console.log(doesWordExist(words2, "apple"));  
console.log(doesWordExist([], "matter"));     
