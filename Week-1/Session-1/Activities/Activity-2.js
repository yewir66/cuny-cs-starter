// Week 1 Session 1: Variables and Data Types Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Create variables for different data types
// TODO: Create a string variable for your name 
let myName = "Yewir Recio";

// TODO: Create a number variable for your age
let myAge = 19;

// TODO: Create a boolean variable for whether you're a student
let isStudent = true;

// Task 2: Print variables to console
// TODO: Use console.log() to display each variable
console.log(myName)
console.log(myAge)
console.log(isStudent)
// Task 3: Experiment with typeof operator
// TODO: Check the type of each variable using typeof
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);
// BONUS CHALLENGES
// 1. Create a variable that holds your favorite quote
let favoriteQuote = "hello world";
console.log(favoriteQuote);
// 2. Create a variable that calculates days until tlehe weekend
let date = new Date();
let day = date.getDay();
console.log(day);
let weekend = 6;
let daysUntilWeekeend = weekend-day;
console.log(daysUntilWeekeend);
if (daysUntilWeekeend == 6) {

    daysUntilWeekeend = 0
}


// 3. Create a variable that checks if today is a weekday
let sunday = 0;
if (date == 6 )  {

    console.log("today is not a week day")
}
