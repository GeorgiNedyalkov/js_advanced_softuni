function addItem() {
  const itemsList = document.getElementById("items-list");
  const inputEl = document.getElementById("new-element");

  if (inputEl.value === "") {
    return;
  }

  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteItem);
  liEl.appendChild(deleteBtn);

  itemsList.appendChild(liEl);
  inputEl.value = "";

  function deleteItem(e) {
    liEl.remove();
    deleteBtn.removeEventListener("click", deleteItem);
  }
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

const incrementBtn = document.getElementById("increment");

incrementBtn.addEventListener("click", increment);

function increment(e) {
  const target = e.target;
  const targetText = target.textContent;
  target.textContent = Number(targetText) + 1;
}
