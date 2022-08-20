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

function symbols(availability, charCode) {
  random = String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
  console.log(random)
}




