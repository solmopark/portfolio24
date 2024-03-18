const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("content");
const commentSubmit = document.querySelector("button[type='button']");
const showMoreBtn = document.getElementById("showMoreBtn");
const commentContainer = document.getElementById("comment-container");

let comments = [];

function submitComment() {
    const nickname = nicknameInput.value.trim();
    const email = emailInput.value.trim();
    const newComment = commentInput.value.trim();

    if (!isValidEmail(email)) {
        alert("유효하지 않은 이메일 주소입니다.😥");
        return;
    }

    if (nickname.length === 0 || newComment.length === 0) {
        alert("닉네임과 댓글을 모두 작성해주세요.😥");
        return;
    }

    addComment(nickname, email, newComment); // 새로운 댓글 추가
}

function addComment(nickname, email, content) {
    const currentTime = new Date();
    const currentTimeString = currentTime.toLocaleString();

    const newComment = {
        nickname: nickname,
        email: email,
        content: content,
        time: currentTimeString
    };

    comments.unshift(newComment); // 새로운 댓글을 배열의 첫 번째로 추가
    saveComments(); // 댓글 저장

    renderComments(); // 댓글 화면에 렌더링
    alert("댓글이 작성되었습니다!🥰");

    // 입력 필드 초기화
    commentInput.value = "";
    nicknameInput.value = "";
    emailInput.value = "";
}

function deleteComment(commentTime) {
    if (confirm("정말로 삭제하시겠습니까?🤔")) {
        comments = comments.filter(comment => comment.time !== commentTime); // 삭제할 댓글을 필터링하여 제거
        saveComments(); // 변경된 댓글 목록을 저장
        renderComments(); // 변경된 댓글을 다시 화면에 렌더링
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    const savedComments = localStorage.getItem("comments");
    comments = savedComments ? JSON.parse(savedComments) : []; // 로컬 스토리지에서 댓글 불러오기

    renderComments(); // 불러온 댓글을 화면에 렌더링
}

function renderComments() {
    commentContainer.innerHTML = ""; // 댓글 컨테이너 초기화

    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.innerHTML = `
            <span class="name">${comment.nickname}</span> <span class="email">(${comment.email})</span> <br>
            <strong>${comment.content}</strong> <span class="time">${comment.time}</span>
            <button class="delete" onclick="deleteComment('${comment.time}')">Delete</button>
        `;
        commentContainer.appendChild(commentElement);
    });

    if (comments.length > 3) {
        showMoreBtn.style.display = "block";
    } else {
        showMoreBtn.style.display = "none";
    }
}

// 페이지 로드 시 댓글 불러오기
window.addEventListener("load", loadComments);

// 이벤트 리스너 추가
commentSubmit.addEventListener("click", submitComment);
