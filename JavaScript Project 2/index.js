//String Manipulation function
// Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Grace"));
//Output: ecarG

// Count Characters in a String
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Grace"));
//Output: 5

//Capitalize the First Letter of Each Word in a String
function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}
console.log(capitalizeFirstLetter("grace is a project manager"));
//Output: Grace Is A Project Manager



//Array Functions
//Maximum and Minimum
function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

console.log(findMaximum([4, 8, 2, 10, 5]));
// Output: 10
function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i <numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

console.log(findMinimum([4, 8, 2, 10, 5]));
// Output: 2

//Count Characters
function countCharactersInArray(arr) {
    let totalCharacters = 0;
    for (let i = 0; i < arr.length; i++) {
        totalCharacters += arr[i].length;
    }
    return totalCharacters;
}

console.log(countCharactersInArray(["Grace", "is", "a", "project", "manager"]));
// Output: 22

//Filter Array
function filterArray(arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

console.log(filterArray([4, 8, 2, 10, 5], (x) => x > 5));
// Output: [8, 10]


//Mathematical Functions
//Factorial
function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120

//Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false

//Fibonacci Sequence
function fibonacci(terms) {
    let sequence = [];

    let first = 0;
    let second = 1;

    for (let i = 0; i < terms; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    return sequence;
}

console.log(fibonacci(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13]