function addItem() {
  const itemsList = document.getElementById("items-list");
  const inputEl = document.getElementById("new-element");

  if (inputEl.value === "") {
    return;
  }

  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;
  inputEl.value = "";
  itemsList.appendChild(liEl);
}
