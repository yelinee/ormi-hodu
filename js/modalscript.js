const subscribeBtn = document.getElementById("subscribeBtn"); // 모달을 띄우는 버튼 요소 가져오기
const modal = document.getElementById("modalWrap"); // 모달 창 요소 가져오기
const closeBtn = document.getElementById("closeBtn"); // 모달을 닫는 버튼 요소 가져오기
const emailInput = document.getElementById("email-input"); // 이메일 입력 필드 가져오기

subscribeBtn.onclick = function () {
    const email = emailInput.value;

    // 이메일 유효성 검사
    if (email && email.includes("@") && email.includes(".")) {
        modal.style.display = "block"; // 유효한 이메일인 경우 모달 창 띄움
    } else {
        alert("유효하지 않은 이메일입니다.");
    }

};

closeBtn.onclick = function () {
    modal.style.display = "none"; // ok를 클릭하면 모달 창을 숨김
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // 모달 외부를 클릭하면 모달을 숨김
    }
};