const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// toDoForm에서만 찾을 수도 있다
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// 배열 생성, localStorage에 있던 toDo를 새로고침시 이전하기 위해 let 사용

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // 로컬 저장소에 toDos를 넣는다
  // string의 형태로?
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 상위 li확인
  li.remove(); // 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 배열을 선택한 숫자가 제거된 배열로 대체하는 함수 filter
  // return이 true이면 새 배열에 넣고 false이면 넣지 않는다
  // toDo.id = number
  // li.id = string
  saveToDos();
  // 변화된 값 저장
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // append가 제일 마지막에 와야함
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const newToDo = toDoInput.value; // 값 저장
  toDoInput.value = "";
  // toDoInput의 값 비우기
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // newToDo를 배열에 삽입
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 만약에 saveToDos가 localStorage에 있다면
  const parsedToDos = JSON.parse(savedToDos);
  // string을 배열로
  toDos = parsedToDos;
  // 덮어쓰기 말고 이어쓰기
  // 이걸 쓰기 이전에는 let toDos = []이기 때문에
  // 새로운 정보를 넣으면 이전 정보들이 삭제된다
  parsedToDos.forEach(paintToDo);
  // forEach = array의 각 item에 대해 function을 실행하게 해준다
  // paintToDo("a"), paintToDo("b"), paintToDo("c")...
}
