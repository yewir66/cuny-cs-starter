// Week 1 Session 1: Operators Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Challenge 1: Temperature Converter
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let celsius = 25;
// Your code here
let fahrenheit = (celsius*9/5 + 32);
console.log(fahrenheit)

// Challenge 2: Shopping Cart
// TODO: Calculate total with tax (8%)
let itemPrice = 19.99;
let quantity = 3;
let taxRate = 0.08;
// Your code here
let price = (itemPrice * quantity);
console.log(price);
price+=5
console.log(price);
let tax = (itemPrice * quantity) * (taxRate);
let total = (price + tax)
console.log(total)


// Challenge 3: Simple Logic
// TODO: Check if a number is even AND greater than 10
let number = 14;
// Your code here
if (number > 10) {

    console.log("greater than")
}

// BONUS CHALLENGES
// 1. Create a tip calculator (15%, 18%, 20% options)
let check = 55;
let fifteenpercent = 0.15;
let eighteenpercent = 0.18;
let twentypercent = 0.20;

if(fifteenpercent) {

    let price = (check * fifteenpercent)
}
if(eighteenpercent) {

    let price = (check * eighteenpercent)
}
if(twentypercent) {

    let price = (check * twentypercent)
}
console.log(price);
// 2. Check if a year is a leap year
// 3. Calculate BMI (weight in kg / height in meters squared)