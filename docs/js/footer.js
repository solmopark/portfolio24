// comment
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("content");
const commentSubmit = document.querySelector("button[type='button']");
const showMoreBtn = document.getElementById("showMoreBtn");

let comments = [];

function submitComment() {
  const nickname = nicknameInput.value.trim(); // 닉네임에서 앞뒤 공백을 제거합니다.
  const email = emailInput.value.trim(); // 이메일에서 앞뒤 공백을 제거합니다.
  const newComment = commentInput.value.trim(); // 입력값에서 앞뒤 공백을 제거합니다.

  if (nickname.length === 0 || email.length === 0 || newComment.length === 0) {
    alert("댓글을 작성하셨습니다!🥰");
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
  const defaultComment = `<span class="name">${nickname}</span>
      <span class="email">${email}</span> <br>
      <span class="content">${content}</span>
      <span class="time">${currentTime}</span>
      <button class="delete" onclick="confirmDelete(this.parentNode)">삭제</button>   
  `;

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
  if (confirm("정말로 댓글을 삭제하시겠습니까?🤔")) {
    deleteComment(commentNode);
    location.reload(); // 페이지 새로고침
  }
}

function deleteComment(commentNode) {
  const commentContainer = document.getElementById("comment-container");
  commentContainer.removeChild(commentNode);
  saveComments();
}

function loadComments() {
  const commentWrapper = document.getElementById("comment-container");
  commentWrapper.innerHTML = "";
  const visibleComments = comments.slice(0, 3);
  visibleComments.forEach((commentObj) => {
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
  localStorage.setItem(
    "comments",
    JSON.stringify(
      comments.filter((comment) => new Date(comment.time) > new Date())
    )
  );
}

function showMoreComments() {
  const hiddenComments = document.querySelectorAll(
    ".comment-container .hidden"
  );
  hiddenComments.forEach((comment) => {
    comment.classList.remove("hidden");
  });
  showMoreBtn.style.display = "none";
}

function hideComments() {
  const hiddenComments = document.querySelectorAll(
    ".comment-container div:nth-child(n+4)"
  );
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



// email copy
function E_mail__Copy() {
    // naver mail url 
    document.getElementById("nmailImg").addEventListener("click", function () {
    var email = "haesol_97@naver.com";
    copyToClipboard(email);
    showPopupMessage("이메일 주소가 복사되었습니다🤗");
    });

    // google mail url 
    document.getElementById("gmailImg").addEventListener("click", function () {
    var email = "haegol.p@gmail.com";
    copyToClipboard(email);
    showPopupMessage("이메일 주소가 복사되었습니다🤗");
    });

    function copyToClipboard(text) {
    var input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    }

    function showPopupMessage(message) {
    var popup = document.getElementById("popupMsg");
    var popupText = document.getElementById("popupText");
    popupText.innerHTML = message;
    popup.classList.add("show");
    setTimeout(function () {
        popup.classList.remove("show");
    }, 2000);
    }
}
E_mail__Copy();