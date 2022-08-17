let num1 = 8;
let num2 = 2;
let finalResult = 0

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let resultEl = document.getElementById("result-el")

function add() {
    finalResult = num1 + num2;
    resultEl.textContent ="Sum: " +  finalResult
}

function substract() {
    finalResult = num1 - num2;
    resultEl.textContent = "Diff: " + finalResult;
}

function divide() {
    finalResult = num1 / num2;
    resultEl.textContent = "Qt: " + finalResult;
}

function multiply() {
    finalResult = num1 * num2;
    resultEl.textContent = "Pr: " + finalResult;
}