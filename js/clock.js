const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // Date 오브젝트는 현재 시간에 대한 정보를 알려준다
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // String() 감싸면 문자열화.
  // padStart(2, "0") = 문자 길이가 2가 안되면 그만큼 앞에 0추가.
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 즉시 호출
setInterval(getClock, 1000); // 매 1초마다 호출 (호출할 함수, ms)
