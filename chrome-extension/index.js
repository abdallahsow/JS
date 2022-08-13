myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  render();
  inputEl.value = "";
});

function render() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target="_blank" href="${myLeads[i]}">${myLeads[i]}"</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
