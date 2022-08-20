const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
let random = ""

// function generatePass(passLength) {
//   firstPass.textContent = "";
//   secondPass.textContent = "";
//   for (let i = 0; i < passLength; i++) {
//     let randomOnePass = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
//     firstPass.textContent += randomOnePass;
//     let randomTwoPass = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
//     secondPass.textContent += randomTwoPass;
//   }
// }

function cases(availability, charCode) {
  random = String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
  console.log(random)
}

function testing() {
  if (upperCase.checked) {
    cases(26, 65);
  } else if (lowerCase.checked) {
    cases(26, 97);
  } else if (numbers.checked) {
    cases(10, 48);
  } else if (symbols.checked) {
    cases(15, 33).concat(cases(7, 58)).concat(6, 91).concat(4, 123);
  }




