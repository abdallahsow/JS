let finalResult = 0
num1 = document.getElementById("num1-el");
num2 = document.getElementById("num2-el");

const resultEl = document.getElementById("result-el")


function add() {
    finalResult = Number(num1.value) + Number(num2.value);
    resultEl.textContent = "Sum: " + finalResult;
}

function substract() {
    finalResult = Number(num1.value) - Number(num2.value);
    resultEl.textContent = "Diff: " + finalResult;
}

function divide() {
    finalResult = Number(num1.value) / Number(num2.value);
    resultEl.textContent = "Qt: " + finalResult;
}

function multiply() {
    finalResult = Number(num1.value) * Number(num2.value);
    resultEl.textContent = "Pr: " + finalResult;
}