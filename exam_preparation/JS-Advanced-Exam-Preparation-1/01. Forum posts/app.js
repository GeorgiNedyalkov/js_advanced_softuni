window.addEventListener("load", solve);

function solve() {
  // 1. Select all DOM elements which we'll reuse
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let publishBtn = document.getElementById("publish-btn");
  let reviewList = document.getElementById("review-list");
  let publishList = document.getElementById("published-list");
  let clearButton = document.getElementById("clear-btn");

  publishBtn.addEventListener("click", publishHandler);
  clearButton.addEventListener("click", clearPostsHandler);

  // 2. Implement logic for publishing new article
  function publishHandler(e) {
    let title = postTitle.value;
    let category = postCategory.value;
    let content = postContent.value;

    // 2.1. Check if inputs have empty strings
    if (title === "" || category === "" || content === "") {
      return;
    }

    let post = createPost(title, category, content);
    reviewList.appendChild(post);

    // reset inputs
    postTitle.value = "";
    postCategory.value = "";
    postContent.value = "";
  }

  function createPost(title, category, content) {
    let listEl = document.createElement("li");
    listEl.classList.add("rpost");

    let articleEl = document.createElement("article");
    let headingH4El = document.createElement("h4");
    let paragraphEl = document.createElement("p");
    let paragraphEl2 = document.createElement("p");

    headingH4El.textContent = title;
    paragraphEl.textContent = "Category: " + category;
    paragraphEl2.textContent = "Content: " + content;

    articleEl.appendChild(headingH4El);
    articleEl.appendChild(paragraphEl);
    articleEl.appendChild(paragraphEl2);

    let editBtnEl = document.createElement("button");
    let approveBtnEl = document.createElement("button");

    editBtnEl.textContent = "Edit";
    editBtnEl.classList.add("action-btn", "edit");
    editBtnEl.addEventListener("click", editPost);

    approveBtnEl.textContent = "Approve";
    approveBtnEl.classList.add("action-btn", "approve");
    approveBtnEl.addEventListener("click", approvePost);

    listEl.appendChild(articleEl);
    listEl.appendChild(editBtnEl);
    listEl.appendChild(approveBtnEl);

    return listEl;
  }
  // 3. Implement Edit logic
  // Extract a function for creating the HTML structure of a post
  function editPost(e) {
    // 3.1. Remove HTML representation of the post (li element) from review list
    let liElement = e.target.parentElement;
    liElement.remove();

    // 3.2. Add current post title, category and content to input fields in publish form.
    let titleH4 = liElement.querySelector("h4");
    let titleValue = titleH4.textContent;

    // paragraphs is a node list
    let paragraphs = liElement.querySelectorAll("p");
    let categoryValue = paragraphs[0].textContent;
    let contentValue = paragraphs[1].textContent;

    postTitle.value = titleValue;
    postCategory.value = categoryValue.substring(10);
    postContent.value = contentValue.substring(9);
  }

  // 4. Implement Approve logic
  function approvePost(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    let buttons = Array.from(liElement.querySelectorAll("button"));
    buttons.forEach((b) => b.remove());

    publishList.appendChild(liElement);
  }

  // 5. Implement Clear posts logic
  function clearPostsHandler() {
    let postsToClear = Array.from(publishList.children);
    postsToClear.forEach((p) => p.remove());
  }
}
