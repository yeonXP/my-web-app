// /src/index.js
const message = "Hello, Nginx Deployment!";

// 콘솔에 메시지 출력
console.log(message);

// DOM 조작으로 화면에 표시
document.addEventListener("DOMContentLoaded", () => {
	document.body.innerHTML =
		`<h1>${message}</h1>`;
});