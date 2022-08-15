// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  sentence = `The ${arr.length} ${desc} are `;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      sentence += `${arr[i]}`;
    } else {
      sentence += `${arr[i]}, `;
    }
  }
  console.log(sentence);
}

days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

countries = [
  "China",
  "India",
  "USA",
  "Russia",
  "Canada",
  "Mexico",
  "Indonesia",
];

Fruits = [
  "Bananas",
  "Apples",
  "Pears",
  "Kiwis",
  "Melons",
  "Oranges",
  "Pomegranates",
];

generateSentence("best fruits", Fruits);
