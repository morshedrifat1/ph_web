// step--1: set an event handler to the button

document.getElementById("post").addEventListener("click", function () {
  // step-2: get the text written in the comment text area
  const commentBox = document.getElementById("comment-text");
  const commText = commentBox.value;
  // step-3: create a comment p and set the innerText
  const commentP = document.createElement("p");
  commentP.innerText = commText;
  // step-4: get the parent node where to publish comment
  const section = document.getElementById("comment-section");
  // step-5: append the new p tag to the parent Node
  section.appendChild(commentP);
  commentP.classList.add("comment");

  // step-6: clean the text area
    commentBox.value = '';
    
});

// const commentBox = document.getElementById("comment-text");
// const commText = commentBox.value;
// const commentP = document.createElement("p");
// commentP.innerText = commText;
// const section = document.getElementById("comment-section");
// section.appendChild(commentP);
// commentP.classList.add("comment");
