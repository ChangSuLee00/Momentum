const API_KEY = "1fbcfaf4bc99a2cb030fc441fa3aaf01";

function onGeoOk(posision) {
  const lat = posision.coords.latitude;
  const lon = posision.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
