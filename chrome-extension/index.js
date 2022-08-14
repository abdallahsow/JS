myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");

leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render();
  inputEl.value = "";
});

function render() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
