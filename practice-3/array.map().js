/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNums = nums.map((num) => num ** 2);
console.log(squaredNums);

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "tom", "frank", "charlie", "danielle"];
const capitalizedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1)
);

console.log(capitalizedNames);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"];
const paragraphs = pokemon.map(function (pok) {
  return `<p>${pok}</p>`;
});

console.log(paragraphs);
