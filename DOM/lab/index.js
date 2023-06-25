function edit(ref, match, replacer) {
  const content = ref.textContent;
  const matcher = new RegExp(match, "g");
  const edited = content.replace(matcher, replacer);
  ref.textContent = edited;
}

function extractValues() {
  let textAreaEl = document.getElementById("text");
  let listItemsArr = Array.from(document.getElementsByTagName("li"));

  for (let listItem of listItemsArr) {
    textAreaEl.value += listItem.textContent + "\n";
  }
}
