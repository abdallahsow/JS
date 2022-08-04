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

let inc = 0;

function increment() {
    inc = inc + 1;
    console.log(inc);
}
 
// Challenge 3:
// Create a function that increments the lapsCompleted variable with one
// run it three times

let lapsCompleted = 0;

function incrementLaps() {
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
}

incrementLaps();

