window.addEventListener("load", solve);

function solve() {
  // 1. Select all dom elements
  let gemName = document.getElementById("gem-name");
  let gemColor = document.getElementById("color");
  let gemCarats = document.getElementById("carats");
  let gemPrice = document.getElementById("price");
  let gemType = document.getElementById("type");
  let addButton = document.getElementById("add-btn");
  let previewList = document.getElementById("preview-list");
  let collection = document.getElementById("collection");

  // 1.1 add event listener to add button
  addButton.addEventListener("click", addGemHandler);

  function addGemHandler(e) {
    // 2. Get the information from the form
    let name = gemName.value;
    let color = gemColor.value;
    let carats = gemCarats.value;
    let price = gemPrice.value;
    let type = gemType.value;

    //  1.2 check to see if all fields have correct input
    if (
      name === "" ||
      color === "" ||
      carats === "" ||
      price === "" ||
      type === ""
    ) {
      return;
    }

    let gem = createGem(name, color, carats, price, type);
    previewList.appendChild(gem);

    gemName.value = "";
    gemColor.value = "";
    gemCarats.value = "";
    gemPrice.value = "";
    gemType.value = "";
  }

  // 3. Implement logic to add new gem
  function createGem(name, color, carats, price, type) {
    let listEl = document.createElement("li");
    listEl.classList.add("gem-info");

    let article = document.createElement("article");
    let heading4 = document.createElement("h4");
    let colorParagraph = document.createElement("p");
    let caratsParagraph = document.createElement("p");
    let priceParagraph = document.createElement("p");
    let typeParagraph = document.createElement("p");

    heading4.textContent = name;
    colorParagraph.textContent = `Color: ${color}`;
    caratsParagraph.textContent = `Carats: ${carats}`;
    priceParagraph.textContent = `Price: ${price}`;
    typeParagraph.textContent = `Type: ${type}`;

    article.appendChild(heading4);
    article.appendChild(colorParagraph);
    article.appendChild(caratsParagraph);
    article.appendChild(priceParagraph);
    article.appendChild(typeParagraph);

    listEl.appendChild(article);

    let saveButton = document.createElement("button");
    let editButton = document.createElement("button");
    let cancelButton = document.createElement("button");

    saveButton.textContent = "Save to Collection";
    editButton.textContent = "Edit Information";
    cancelButton.textContent = "Cancel";

    saveButton.classList.add("save-btn");
    editButton.classList.add("edit-btn");
    cancelButton.classList.add("cancel-btn");

    saveButton.addEventListener("click", saveGemHandler);
    editButton.addEventListener("click", editGemHandler);
    cancelButton.addEventListener("click", cancelGemHandler);

    listEl.appendChild(saveButton);
    listEl.appendChild(editButton);
    listEl.appendChild(cancelButton);

    return listEl;
  }
  // 4. Implement logic to edit information from the preview
  function editGemHandler(e) {
    let listElement = e.target.parentElement;
    listElement.remove();

    let nameH4 = listElement.querySelector("h4");
    let nameValue = nameH4.textContent;

    let paragraphs = listElement.querySelectorAll("p");
    let colorValue = paragraphs[0].textContent;
    let caratsValue = paragraphs[1].textContent;
    let priceValue = paragraphs[2].textContent;
    let typeValue = paragraphs[3].textContent;

    gemName.value = nameValue;
    gemColor.value = colorValue.substring(6);
    gemCarats.value = caratsValue.substring(7);
    gemPrice.value = priceValue.substring(7);
    gemType.value = typeValue.substring(6);
  }
  // 5. Save the information form the preview
  function saveGemHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let liParagraph = document.createElement("li");
    let liParagraphs = Array.From(liElement.querySelectorAll("p"));
    liParagraphs.forEach((p) => p.remove);

    let name = liElement.querySelector("h4").textContent;
    let color = liParagraphs[0].textContent;
    let carats = liParagraphs[1].textContent;
    let price = liParagraphs[2].textContent;
    let type = liParagraphs[3].textContent;

    let buttons = Array.from(liElement.querySelectorAll("button"));
    buttons.forEach((b) => b.remove());

    liParagraph.textContent = `${name} - Color: ${color} /Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

    liParagraph.classList.add("collection-item");

    collection.appendChild(liParagraph);
  }
  // 6. Cancel information from the preview
  function cancelGemHandler() {
    let gemsToCancel = Array.from(previewList.children);
    gemsToCancel.forEach((g) => g.remove());
  }
}
