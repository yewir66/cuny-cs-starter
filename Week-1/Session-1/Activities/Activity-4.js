// Week 1 Session 1: First Programs
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Program 1: Personal Information
// TODO: Create variables for your name, age, and city
// TODO: Display a formatted message like "Hello, I'm John, 25 years old from New York"
let myName = "My name is Yewir Recio";
let myAge = " i am 19 years of age";
let place = " from New York";
let display = (myName+myAge+place);
console.log(display)


// Program 2: Basic Calculator
// TODO: Create two number variables
// TODO: Perform addition, subtraction, multiplication, division
// TODO: Display all results with descriptive messages
let number1 = 20;
let number2 = 30;
let addition  = (20+30);
console.log(addition)
let subtraction = (number1-number2);
console.log(subtraction)
let multiplication = (number1 * number2);
console.log(multiplication)
let division = (number1 / number2);
console.log(division)

// Program 3: Simple Conversion
// TODO: Convert miles to kilometers (1 mile = 1.60934 km)
// TODO: Display the result with a clear message
let m = 3;
let km = m * 1.60934;
console.log(m+ " miles is " +km+" killometers ")


// BONUS PROGRAM: Create Your Own
// Choose one of these ideas or create your own:
// - Recipe converter (cups to grams)
// - Time converter (minutes to hours:minutes format)
// - Grade calculator (percentage to letter grade)
let percentage = 10;
let grade;
if (percentage >= 90) {

    grade = "A"
} 
else if (percentage>= 80) {

    grade = "B"
}
else if (percentage>= 60) {

    grade = "C"
}
else if (percentage >= 40) {

    grade = "D"
}
else if (isless = 20 ) {

    grade = "F"
}
console.log(grade);