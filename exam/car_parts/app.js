window.addEventListener("load", solve);

function solve() {
  const modelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const partNameInput = document.getElementById("part-name");
  const partNumberInput = document.getElementById("part-number");
  const conditionInput = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");

  const infoListEl = document.getElementsByClassName("info-list")[0];
  const confirmListEl = document.getElementsByClassName("confirm-list")[0];

  nextBtn.addEventListener("click", nextStep);

  function nextStep(e) {
    e.preventDefault();

    const modelInputValue = modelInput.value;
    const carYearInputValue = Number(carYearInput.value);
    const partNameInputValue = partNameInput.value;
    const partNumberInputValue = partNumberInput.value;
    const conditionInputValue = conditionInput.value;

    if (
      modelInputValue === "" ||
      partNameInputValue === "" ||
      partNumberInputValue === "" ||
      conditionInputValue === "" ||
      carYearInputValue < 1890 ||
      carYearInputValue > 2023
    ) {
      return;
    }

    const liEl = document.createElement("li");
    liEl.classList.add("part-content");

    const articleEl = document.createElement("article");
    const modelParagraph = document.createElement("p");
    modelParagraph.textContent = `Car model: ${modelInputValue}`;
    const carYearParagraph = document.createElement("p");
    carYearParagraph.textContent = `Car year: ${carYearInputValue}`;
    const partNameParagraph = document.createElement("p");
    partNameParagraph.textContent = `Part Name: ${partNameInputValue}`;
    const partNumberParagraph = document.createElement("p");
    partNumberParagraph.textContent = `Part Number: ${partNameInputValue}`;
    const conditionParagraph = document.createElement("p");
    conditionParagraph.textContent = `Condition: ${conditionInputValue}`;

    articleEl.appendChild(modelParagraph);
    articleEl.appendChild(carYearParagraph);
    articleEl.appendChild(partNameParagraph);
    articleEl.appendChild(partNumberParagraph);
    articleEl.appendChild(conditionParagraph);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";

    liEl.appendChild(articleEl);
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);

    infoListEl.appendChild(liEl);

    nextBtn.setAttribute("disabled", "");
    clearAll();

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();

      modelInput.value = modelInputValue;
      carYearInput.value = carYearInputValue;
      partNameInput.value = partNameInputValue;
      partNumberInput.value = partNumberInputValue;
      conditionInput.value = conditionInputValue;

      editBtn.remove();
      continueBtn.remove();
      liEl.remove();

      nextBtn.removeAttribute("disabled");
    });

    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();

      editBtn.remove();
      continueBtn.remove();

      const confirmBtn = document.createElement("button");
      confirmBtn.classList.add("confirm-btn");
      confirmBtn.textContent = "Confirm";

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("cancel-btn");
      cancelBtn.textContent = "Cancel";

      confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const completeTextParagraph = document.getElementById("complete-text");
        completeTextParagraph.textContent = "Part is Ordered!";
        const completeImageEl = document.getElementById("complete-img");
        completeImageEl.style.visibility = "visible";

        liEl.remove();
        nextBtn.removeAttribute("disabled");
      });

      cancelBtn.addEventListener("click", (e) => {
        liEl.remove();
        nextBtn.removeAttribute("disabled");
      });

      liEl.appendChild(cancelBtn);
      liEl.appendChild(confirmBtn);

      confirmListEl.appendChild(liEl);
    });
  }

  function clearAll() {
    modelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";
  }
}
