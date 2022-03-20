let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = [now.getHours()];
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = [now.getMinutes()];
if (minute < 10) {
  minute = `0${minute}`;
}

let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hour}:${minute}`;

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function search(event) {
  event.preventDefault();
  let searchTextInput = document.querySelector("#search-text-input");
  let city = searchTextInput.value;
  let apiKey = "774e0d8fffbeeedfdccb46cff718bbcf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
