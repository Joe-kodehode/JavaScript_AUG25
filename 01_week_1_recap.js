// ------------------------------
// Section 1: Variables, Data Types, and Operators
// ------------------------------

// when naming variables or functions in JavaScript we use camelCase, which is when the first letter is lowercase and the first letter of subsequent words is uppercase

// Scenario: An online store managing product details.
const storeName = "Tech Haven"; // string
const productName = "Wireless Headphones"; // string
let productPrice = 75; // number (integer)
let productQuantity = 4; // number
let isInStock = true; // boolean (true/false)
let productTags = ["audio", "wireless", "accessory"]; // Array
let discount; // undefined

// console.log("Store Name:", storeName);
// console.log("Product Name:", productName);
// console.log("Product Price:", productPrice);
// console.log("Product Quantity:", productQuantity);
// console.log("In Stock?", isInStock);
// console.log("Product Tags:", productTags);
// console.log("Discount:", discount);

// Targeting specific elements in an array
console.log(productTags[1]);

// Calculate the total cost for the available quantity.

const totalCost = productPrice * productQuantity;
console.log(totalCost);

// reassigning product price to be 10 greater
productPrice = productPrice + 10;

// doing the same as the line aboove, but with the shorthand, use this
productPrice += 10;
console.log(productPrice);

// when incrementing by 1, we use ++
productQuantity++;
console.log(productQuantity);

// when decrementing by 1, we use --
productQuantity--;
console.log(productQuantity);

// the modulus operator calculates the remainder between two numbers.
const remainder = totalCost % 145;
console.log(remainder);

// ------------------------------
// Section 2: Conditionals and Logical Operators
// ------------------------------

// Example: Decide promotion messages based on total basket size.

let basketSize = 235;

if (basketSize > 300) {
  console.log("Congratulations! You qualify for free delivery!");
} else if (basketSize > 200) {
  console.log(
    `You're close to getting free delivery, spend 300 or more to be eligble, your current basket size is: ${basketSize}`
  );
} else {
  console.log("Spend 300 or more to get free delivery");
}

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a discount message if the product is in stock and either it's on sale or the quantity is high.
let isOnSale = true;

// productQuantity += 20;

if (isInStock && (isOnSale || productQuantity > 10)) {
  console.log("This product is on a discount!");
}

// ------------------------------
// Section 3: typeof Operator and Truthy/Falsey Values
// ------------------------------

console.log(typeof storeName);
console.log(typeof productPrice);
console.log(typeof isInStock);

if (discount) {
  console.log("truthy");
} else {
  console.log("falsey");
}

// a string with content is truthy
// an empty string is falsey
// a positive number is truthy
// a negative number is truthy
// zero is falsey
// true is truthy
// false is falsey
// undefined is falsey

// Conditional for calculating membership discount.
const isMember = true;

// Using if / else if
if (isMember) {
  console.log("You get a discount");
} else {
  console.log("You don't get a discount");
}

// Same example but with Ternary conditional to set a member discount (or not)

let memberDiscount = isMember
  ? "You get a discount"
  : "You don't get a discount";
console.log(memberDiscount);

// Same example but combining with template literal
// let memberDiscount = `You${isMember ? "" : " don't"} get a discount`;

console.log(memberDiscount);

// --------------------------------------------------
// Section 4: Template Literals (Template Strings) Recap
// --------------------------------------------------

const firstName = "Alex";
const lastName = "Miller";

// const welcomeMessage =
//   "Welcome" + " " + firstName + " " + lastName + " " + "to my site";

const welcomeMessage = `Welcome ${firstName} ${lastName} to my site`;

console.log(welcomeMessage);
