const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
const passLength = 15;

function uppercase() {
  let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function lowercase() {
  let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numbers() {
  let randomNumbers = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function symbols(availability, charCode) {
  let randomSymbols = String.fromCharCode(Math.floor(Math.random() * availability) + charCode);
}

function testing() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  for (let i = 0; i < passLength; i++) {
    if (upperCase.checked) {
      uppercase();
    }
    if (lowerCase.checked) {
      lowercase(26, 97);
    }
    if (numbers.checked) {
      numbers(10, 48);
    }
    if (symbols.checked) {
      symbols(15, 33).concat(symbols(7, 58)).concat(symbols(6, 91)).concat(symbols(4, 123));
    }
    firstPass.textContent +=;
    secondPass.textContent += random;
  }
}
