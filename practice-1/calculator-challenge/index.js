let num1 = "";
let num2 = "";
let finalResult = 0
const firstTerm = num1.value
const secondTerm = num2.value;

 num1 = document.getElementById("num1-el");
 num2 = document.getElementById("num2-el");
let resultEl = document.getElementById("result-el")

function add() {
    first
    finalResult = firstTerm + secondTerm;
    resultEl.textContent ="Sum: " +  finalResult
}

function substract() {
    finalResult = firstTerm - secondTerm;
    resultEl.textContent = "Diff: " + finalResult;
}

function divide() {
    finalResult = firstTerm / secondTerm;
    resultEl.textContent = "Qt: " + finalResult;
}

function multiply() {
    finalResult = firstTerm * secondTerm;
    resultEl.textContent = "Pr: " + finalResult;
}