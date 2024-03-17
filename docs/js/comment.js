// 유효성 검사 추가 버전 맟 댓글 삭제 부분 주가
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

    // 이메일 유효성 검사
    if (!isValidEmail(email)) {
        alert("유효하지 않은 이메일 주소입니다.😥");
        return;
    }

    // 댓글이 비어 있는지 확인
    if (nickname.length === 0 || newComment.length === 0) {
        alert("닉네임과 댓글을 모두 작성해주세요.😥");
        return;
    }

    addComment(nickname, email, newComment);
    alert("댓글이 작성되었습니다!🥰");
}

// 이메일 유효성 검사 함수
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function addComment(nickname, email, content) {
    const commentLists = document.getElementById("comment-container");
    const newCommentList = document.createElement("div");
    const currentTime = new Date(); // 현재 시간을 가져옵니다.
    const currentTimeString = currentTime.toLocaleString(); // 현재 시간을 문자열로 변환합니다.

    if (!currentTimeString || currentTimeString === 'Invalid Date') {
        // 현재 시간 변환 실패 시 오류 메시지를 표시하고 댓글을 저장하지 않습니다.
        alert("댓글을 저장하는 도중 오류가 발생했습니다. 다시 시도해주세요.");
        return;
    }

    const defaultComment = `<span class="name">${nickname}</span> <span class="email">${email}</span> <br> <span class="content">${content}</span> <span class="time">${currentTimeString}</span> <button class="delete" onclick="confirmDelete(this.parentNode, '${currentTimeString}')">Delete</button> `;

    newCommentList.innerHTML = defaultComment;
    commentLists.insertBefore(newCommentList, commentLists.firstChild);

    const commentObj = {
        nickname: nickname,
        email: email,
        content: content,
        time: currentTimeString // 현재 시간을 문자열 형태로 저장합니다.
    };

    comments.unshift(commentObj); // Add new comment to the beginning of the array
    commentInput.value = "";
    nicknameInput.value = "";
    emailInput.value = "";

    if (comments.length > 3) {
        showMoreBtn.style.display = "block";
        hideComments();
    }

    saveComments(); // 새로운 댓글을 저장합니다.
}


function confirmDelete(commentNode, commentTime) {
    if (confirm("정말로 삭제하시겠습니까?🤔")) {
        deleteComment(commentNode, commentTime);
    }
}

function deleteComment(commentNode, commentTime) {
    commentNode.remove(); // 해당 댓글 요소를 바로 삭제합니다.
    comments = comments.filter(comment => comment.time !== commentTime); // Remove the deleted comment from the array
    saveComments(); // 삭제된 댓글을 저장하기 위해 saveComments 함수 호출
}

function loadComments() {
    const commentWrapper = document.getElementById("comment-container");
    commentWrapper.innerHTML = "";
    comments.forEach((commentObj) => {
        const newCommentList = document.createElement("div");
        newCommentList.innerHTML = `
            <span class="name">${commentObj.nickname}</span>
            <span class="email">${commentObj.email}</span> <br>
            <span class="content">${commentObj.content}</span>
            <span class="time">${new Date(commentObj.time).toLocaleString()}</span>
            <button class="delete" onclick="confirmDelete(this.parentNode, ${commentObj.time})">Delete</button>
        `;
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