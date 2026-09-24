let sentence = ("I love coding.");

let length = 0
let words = 0
let vowels = 0
let i = 0

while (sentence[i] !== ".") {
    length++;

    if (sentence[i] === " ") {
        words++;
    }

    if (
        sentence[i] === "a" ||
        sentence[i] === "e" ||
        sentence[i] === "i" ||
        sentence[i] === "o" ||
        sentence[i] === "u"
    ) {
        vowels++;
    }

    i++;
}
// Count the full stop
length++;

// Number of words = spaces + 1
words++;

console.log("Length:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);