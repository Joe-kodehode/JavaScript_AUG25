// Lesson 6 - Functions / Methods recap (and introducing math.random)

// --------------------------------------
// Section 1: Check if a list includes an item (function, ternary, array)
// --------------------------------------

const shoppingList = ["milk", "bread", "cheese", "catfood"];

function checkItem(item) {
  const result = shoppingList.includes(item);
  return `The list ${result ? "does" : "doesnt"} include ${item}`;
}

console.log(checkItem("bread"));
console.log(checkItem("water"));
console.log(checkItem("catfood"));

// --------------------------------------
// Section 2: Convert a Sentence into Kebab Case (function, methods)
// --------------------------------------

function toKebabCase(string) {
  return string.trim().toLowerCase().split(" ").join("-");
}

console.log(toKebabCase("  Hello World From JavaScript  "));
console.log(toKebabCase("  This iS us TesTing oUR fuNCtIoN  "));

// --------------------------------------
// Section 3: Checking if a word is a palindrome (function, methods)
// --------------------------------------

function isPalindrome(word) {
  const lower = word.toLowerCase();

  if (lower === lower.split("").toReversed().join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}

console.log(isPalindrome("Racecar")); //true
console.log(isPalindrome("banana")); //false
console.log(isPalindrome("Hello")); //false
console.log(isPalindrome("asdffdsa")); //true

// --------------------------------------
// Section 5: Introduction to Math.random
// --------------------------------------

// random number between 0-10

// Math.random() gives a random number between 0.0000000 - 0.9999999

//random number between 0-10
console.log(Math.floor(Math.random() * 11));

// random number between 1-100
console.log(Math.floor(Math.random() * 100) + 1);

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
  "charmander",
  "Mr.Mime",
];

const randomIndex = Math.floor(Math.random() * pokemon.length);

console.log(`Your starter pokemon is: ${pokemon[randomIndex]}`);

// --------------------------------------
// Section 7: Rock, paper scissors (function, switch case, Math.random)
// --------------------------------------

const rockPaperScissors = (userInput, aiInput) => {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "it's a draw";
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "user wins";
    default:
      return "ai wins";
  }
};

// Making things random with Math.random

const possibleAnswers = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * 3);

let aiAnswer = possibleAnswers[randomNumber];

console.log(rockPaperScissors("rock", aiAnswer));
