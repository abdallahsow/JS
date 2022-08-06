// document.getElementById("count-el").innerText = 5;

// let firstBatch = 8;
// let secondBatch = 13;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myAge = 20
// console.log(myAge);

// Challenge 1:
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

let myAge = 20;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);

// Challenge 2:
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// Challenge 3:
// Create a function that increments the lapsCompleted variable with one
// run it three times

let lapsCompleted = 0;

function incrementLaps() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLaps();
incrementLaps();
incrementLaps();

console.log(lapsCompleted);

let inc = 0;

let countEl = document.getElementById("count-el");

function increment() {
  inc += 1;
  countEl.textContent = inc;
}

let saveEl = document.getElementById("save-el");

function save() {
  let counting = inc + " - ";
  saveEl.textContent += counting;
  countEl.textContent = 0;
  inc = 0;
}

// Challenge 4:
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let identifier = "Retr0";
let greeting = "Hey, I'm ";
let myGreeting = greeting + identifier;

console.log(myGreeting);
