// comment
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("content");
const commentSubmit = document.querySelector("button[type='button']");
const showMoreBtn = document.getElementById("showMoreBtn");

let comments = [];

function submitComment() {
    const nickname = nicknameInput.value.trim();
    const email = emailInput.value.trim();
    const newComment = commentInput.value.trim();

    if (nickname.length === 0 || email.length === 0 || newComment.length === 0) {
        alert("모든 필드를 작성해주세요.");
    } else {
        addComment(nickname, email, newComment);
        saveComments();
    }
    event.preventDefault();
}

function addComment(nickname, email, content) {
    const commentLists = document.getElementById("comment-container");
    const newCommentList = document.createElement("div");
    const currentTime = new Date().toLocaleString();
    const defaultComment = `<span class="name">${nickname}</span> <span class="email">${email}</span> <br> <span class="content">${content}</span> <span class="time">${currentTime}</span> <button class="delete" onclick="confirmDelete(this.parentNode)">삭제</button> `;

    newCommentList.innerHTML = defaultComment;
    commentLists.appendChild(newCommentList);

    const commentObj = {
        nickname: nickname,
        email: email,
        content: content,
        time: currentTime
    };

    comments.push(commentObj);
    commentInput.value = "";
    nicknameInput.value = "";
    emailInput.value = "";

    if (comments.length > 3) {
        showMoreBtn.style.display = "block";
        hideComments();
    }
}

function confirmDelete(commentNode) {
    if (confirm("정말로 삭제하시겠습니까?")) {
        deleteComment(commentNode);
    }
}

function deleteComment(commentNode) {
    const commentContainer = document.getElementById("comment-container");
    commentContainer.removeChild(commentNode);
    saveComments();
    location.reload();
}

function loadComments() {
    const commentWrapper = document.getElementById("comment-container");
    commentWrapper.innerHTML = "";
    comments.forEach((commentObj) => {
        const newCommentList = document.createElement("div");
        const defaultComment = `<span  class="name">${commentObj.nickname}</span >
<span  class="email">(${commentObj.email})</span > <br> 
<strong>${commentObj.content}</strong> 
<span  class="time">(${commentObj.time})</span >
<button class="delete" onclick="confirmDelete(this.parentNode)">삭제</button>`;
        newCommentList.innerHTML = defaultComment;
        commentWrapper.appendChild(newCommentList);
    });

    if (comments.length > 3) {
        showMoreBtn.style.display = "block";
    }
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function showMoreComments() {
    const hiddenComments = document.querySelectorAll(".comment-container .hidden");
    hiddenComments.forEach((comment) => {
        comment.classList.remove("hidden");
    });
    showMoreBtn.style.display = "none";
}

function hideComments() {
    const hiddenComments = document.querySelectorAll(".comment-container div:nth-child(n+4)");
    hiddenComments.forEach((comment) => {
        comment.classList.add("hidden");
    });
}

const init = () => {
    commentSubmit.addEventListener("click", submitComment);
    window.addEventListener("load", () => {
        comments = JSON.parse(localStorage.getItem("comments")) || [];
        loadComments();
    });
};

init();