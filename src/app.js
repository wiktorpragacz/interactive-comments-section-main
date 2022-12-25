const addReplay = () => {
  const replayContainer = document.querySelectorAll(".replay-container");
  const container = document.createElement("footer");
  const replayBtns = document.querySelectorAll(".replay-button");
  container.classList.toggle('active-replay');

  replayBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log('click...')
      container.classList.toggle('active-replay'); 
      commentID = e.currentTarget.dataset.id;
      container.innerHTML = `<div class='footer-container'>
            <div class='footer-input'>
              <input class='replay-input' maxlength='100' type='text' placeholder='Add a comment...'>
            </div>
            <div class='footer-end'>
              <img class='profile-picture' src='./images/avatars/image-juliusomo.png' alt='profile picture'>
              <button class='send-button send-replay-button' dataset-id='${commentID}'>Send</button></div>
            </div>`;
      const currentContainer = replayContainer[commentID - 1];
      currentContainer.appendChild(container);
      const sendReplayButton = document.querySelector(".send-replay-button");
      // send button click event
      sendReplayButton.addEventListener("click", () => {
        const input = document.querySelector(".replay-input");
        if (input.value !== "") {
          currentContainer.remove();
          const commentReplayContainer = document.querySelectorAll(
            ".comment-replay-container"
          );
          const replayComment = document.createElement("div");
          replayComment.classList.add("replay-center");
          replayComment.innerHTML = `
                    <section class="reply-comment">
                      <section class="comment-header">
                        <img class="profile-picture" src="./images/avatars/image-juliusomo.png" alt="profile picture">
                        <div class="profile-name my-comment">ramsesmiron</div>
                        <div class="profile-comment-date text-grayfish-blue">now</div>
                      </section>
                      <section class="comment-content">
                        <p class="text-grayfish-blue">${input.value}<span class="mentioned-user"></p>
                      </section>
                      <section class="comment-footer">
                        <div class="rating">
                          <img class="plus-icon" src="./images/icon-plus.svg" alt="plus icon">
                          <p class="comment-rate">0</p>
                          <img class="minus-icon" src="./images/icon-minus.svg" alt="minus icon">
                        </div>
                        <div class="delete-and-edit">
                          <img class="delete-icon" src="./images/icon-delete.svg" alt="delete icon">
                          <p class="text-delete">delete</p>
                          <img class="edit-icon" src="./images/icon-edit.svg" alt="edit icon">
                          <p class='text-edit'>edit</p>
                        </div>
                      </section>
                    </section>`;
          commentReplayContainer[commentID - 1].append(replayComment);
          // deleting comment
          const deleteComment = () => {
            const deleteBtn = document.querySelectorAll(".text-delete");
            deleteBtn.forEach((btn) => {
              btn.addEventListener("click", (e) => {
                activeModal(btn);
              });
            });
          };
          deleteComment();
          // editing comment
          editComment(replayComment);
        }
        // if input is empty add red border for 1 second
        else {
          setTimeout(() => {
            input.style.borderColor = "lightgray";
          }, 1000);
          input.style.borderColor = "red";
        }
      });
    });
  });
};
// adding replay comment under current comment
addReplay();
// modal activation
const activeModal = (btn) => {
  const modal = document.querySelector(".modal-delete");
  const modalBackground = document.querySelector(".modal-background");
  modal.classList.add("active");
  modalBackground.classList.add("active");
  document.body.classList.add("active");
  // delete comment or cancel
  // cancel
  const cancelModalBtn = document.querySelector(".modal-cancel-button");
  cancelModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modalBackground.classList.remove("active");
    document.body.classList.remove("active");
  });
  // delete
  const deleteModalBtn = document.querySelector(".modal-delete-button");
  deleteModalBtn.addEventListener("click", (e) => {
    btn.parentElement.parentElement.parentElement.remove();
    modal.classList.remove("active");
    modalBackground.classList.remove("active");
    document.body.classList.remove("active");
  });
};
// delete comment
const deleteComment = () => {
  const deleteBtn = document.querySelectorAll(".text-delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      activeModal(btn);
    });
  });
};
deleteComment();
// edit comment
const editComment = (commentContent) => {
  const editBtn = document.querySelectorAll(".text-edit");
  editBtn.forEach((btn) => {  
    btn.addEventListener("click", (e) => {
      console.log(e.currentTarget)
      commentContent.innerHTML = `<section class="reply-comment">
      <section class="comment-header">
        <img class="profile-picture" src="./images/avatars/image-juliusomo.png" alt="profile picture">
        <div class="profile-name my-comment">ramsesmiron</div>
        <div class="profile-comment-date text-grayfish-blue">Now</div>
      </section>
      <div class="footer-input">
      <section class="comment-content">
          <input class="edit-input" type="text" maxlength="100" placeholder="Edit a comment...">
      </section>
      <section class="comment-footer">
        <div class="rating">
          <img class="plus-icon" src="./images/icon-plus.svg" alt="plus icon">
          <p class="comment-rate">0</p>
          <img class="minus-icon" src="./images/icon-minus.svg" alt="minus icon">
        </div>
        <div class="delete-and-edit">
          <img class="delete-icon" src="./images/icon-delete.svg" alt="delete icon">
          <p class="text-delete">delete</p>
          <button class="send-button update-button">update</button>
        </div>
      </section>
    </section>`;
      e.stopImmediatePropagation();
      deleteComment();

      const editInput = document.querySelector(".edit-input");

      // updating comment
      const updateBtn = document.querySelectorAll(".update-button");
      updateBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (editInput.value !== "") {
            commentContent.innerHTML = `<section class="reply-comment da">
        <section class="comment-header">
          <img class="profile-picture" src="./images/avatars/image-juliusomo.png" alt="profile picture">
          <div class="profile-name my-comment">ramsesmiron</div>
          <div class="profile-comment-date text-grayfish-blue">now</div>
        </section>
        <section class="comment-content">
          <p class="text-grayfish-blue">${editInput.value}<span class="mentioned-user"></p>
        </section>
        <section class="comment-footer">
          <div class="rating">
            <img class="plus-icon" src="./images/icon-plus.svg" alt="plus icon">
            <p class="comment-rate">0</p>
            <img class="minus-icon" src="./images/icon-minus.svg" alt="minus icon">
          </div>
          <div class="delete-and-edit">
            <img class="delete-icon" src="./images/icon-delete.svg" alt="delete icon">
            <p class="text-delete">delete</p>
            <img class="edit-icon" src="./images/icon-edit.svg" alt="edit icon">
            <p class='text-edit'>edit</p>
          </div>
        </section>
      </section>`;
            deleteComment();
          } else {
            setTimeout(() => {
              editInput.style.borderColor = "lightgray";
            }, 1000);
            editInput.style.borderColor = "red";
          }

        });
      });
    });
  });
};
// adding comment
const addComment = () => {
  const main = document.querySelector("main");
  const sendBtn = document.querySelector(".send-button");
  // commentSection.classList.add('comment');
  sendBtn.addEventListener("click", () => {
    const commentSection = document.createElement("section");
    commentSection.classList.add('comment-center');
    const inputValue = document.querySelector(".input-comment");
    if (inputValue.value !== "") {
      commentSection.innerHTML = `<div class="replay-comment-container" style='border-left: none'>
    <section class="comment">
      <section class="comment-header">
        <img class="profile-picture" src="./images/avatars/image-juliusomo.png" alt="profile picture">
        <div class="profile-name my-comment">ramsesmiron</div>
        <div class="profile-comment-date text-grayfish-blue">Now</div>
      </section>
      <section class="comment-content">
        <p class="text-grayfish-blue">${inputValue.value}</p>
      </section>
      <section class="comment-footer">
        <div class="rating">
          <img class="plus-icon" src="./images/icon-plus.svg" alt="plus icon">
          <p class="comment-rate">0</p>
          <img class="minus-icon" src="./images/icon-minus.svg" alt="minus icon">
        </div>
        <div class="delete-and-edit">
          <img class="delete-icon" src="./images/icon-delete.svg" alt="delete icon">
          <p class="text-delete">delete</p>
          <img class="edit-icon" src="./images/icon-edit.svg" alt="edit icon">
          <p class='text-edit'>edit</p>
        </div>
      </section>
    </section>
  </div>`;
      main.appendChild(commentSection);
      inputValue.value='';
    } else{
      setTimeout(() => {
        inputValue.style.borderColor = "lightgray";
      }, 1000);
      inputValue.style.borderColor = "red";
    }

    deleteComment();
    editComment(commentSection);
  });
};

addComment();
