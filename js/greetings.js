const loginForm = document.querySelector("#login-form");
// 쿼리셀렉터이기 때문에 # 쓴다
// 만약에 document.getElementById라면 id라는 것을 인지하고 있기에 특수문자 필요x
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string으로만 이루어진 대체용 변수는 이렇게 쓴다.
const USERNAME_KEY = "username";
// 이렇게 하지 않으면 오류가 나지 않아 확인이 불가.
// 반복되는 string 문자는 대문자 변수로 저장해 놓는 것이 좋다.

function onLoginSubmit(event) {
  // 이벤트 리스너를 통해 실행하면 첫번째 argument로 현재 상황에 대한 정보를 준다.
  event.preventDefault(); // 입력된 argument로 실행할 수 있는 함수. 자동 동작을 멈춘다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const TypedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, TypedUsername);
  paintGreeting(TypedUsername);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; // `` 백틱을 사용해야 한다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
