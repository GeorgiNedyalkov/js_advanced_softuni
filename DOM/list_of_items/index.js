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

function deleteRedElements() {
  const redElements = document.querySelectorAll("#items-list li.red");
  redElements.forEach((li) => li.parentElement.removeChild(li));
}

function deleteByEmail() {
  const tableBody = document.querySelectorAll("#customers tbody")[0];
  const inputEl = document.getElementsByName("email")[0];

  document.querySelectorAll("table tr").forEach((tr) => {
    const tdEmailElText = tr.children[1].textContent;

    if (inputEl.value === tdEmailElText) {
      tableBody.removeChild(tr);
    }
  });

  inputEl.value = "";
}
