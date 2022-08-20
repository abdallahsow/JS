const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
let passLength = 15;


function cases(availability, charCode) {
  return String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
}

function generatePasswords() {

  threeBoxesToggled()
}

function oneBoxToggled() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  for (let i = 0; i < passLength; i++) {
    if (upperCase.checked) {
      firstPass.textContent += cases(26, 65);
      secondPass.textContent += cases(26, 65);
    } else if (lowerCase.checked) {
      firstPass.textContent += cases(26, 97);
      secondPass.textContent += cases(26, 97);
    } else if (numbers.checked) {
      firstPass.textContent += cases(10, 48);
      secondPass.textContent += cases(10, 48);
    }
  }

  if (symbols.checked) {
    passLength = 3;
    for (let i = 0; i < passLength; i++) {
      firstPass.textContent += cases(15, 33)
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123))
        .concat(cases(15, 33));
      secondPass.textContent += cases(15, 33)
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123))
        .concat(cases(15, 33));
    }
  }
}

function allBoxesToggled() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  passLength = 15
  for (let i = 0; i < passLength; i++) {
    firstPass.textContent += cases(93, 33)
    secondPass.textContent += cases(93, 33)
  }
}


function threeBoxesToggled() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  let firstThree = "";
  let secondThree = "";
  passLength = 15
  for (let i = 0; i < passLength; i++) {
    if (upperCase.checked && lowerCase.checked && numbers.checked) {
      firstThree += cases(26, 65).concat(cases(26, 97)).concat(cases(10, 48));
      console.log(firstThree);
      firstPass.textContent += firstThree.charAt(
        Math.floor(Math.random() * firstThree.length)
      );
      secondPass.textContent += firstThree.charAt(
        Math.floor(Math.random() * firstThree.length)
      );
    } else if (upperCase.checked && numbers.checked && symbols.checked) {
      secondThree += cases(26, 65).concat(cases(10, 48)).concat(cases(15, 33)).concat(cases(7, 58)).concat(cases(6, 91)).concat(cases(4, 123));
      console.log(secondThree);
      firstPass.textContent += secondThree.charAt(Math.floor(Math.random() * secondThree.length));
    }
  }
}