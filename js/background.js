const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
// HTML 태그 <img>를 생성한다

bgImage.src = `img/${chosenImage}`;
// src = "img/~~" 추가

document.body.appendChild(bgImage);
// body에 추가