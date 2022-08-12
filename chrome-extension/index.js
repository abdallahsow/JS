myLeads = []
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})