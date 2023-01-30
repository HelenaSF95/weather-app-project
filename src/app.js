function formatDate(timestamp) {
  let currentDate = new Date(timestamp);
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[currentDate.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function getWeather(response) {
  let cityElement = document.querySelector("#city");
  let descripElement = document.querySelector("#description");
  let tempElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let weatherIcon = document.querySelector("#icon");
  let dateElement = document.querySelector("#date");

  celciusTemperature = response.data.temperature.current;

  cityElement.innerHTML = response.data.city;
  descripElement.innerHTML = response.data.condition.description;
  tempElement.innerHTML = Math.round(celciusTemperature);
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  weatherIcon.setAttribute("src", response.data.condition.icon_url);
}

function search(city) {
  let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
  let units = `metric`;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(url).then(getWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input-city");
  search(cityInput.value);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  celciusLink.classList.remove("active-link");
  fahrenheitLink.classList.add("active-link");
  let fahrenheitTemp = (14 * 9) / 5 + 32;
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = Math.round(fahrenheitTemp);
}

function showCelciusTemp(event) {
  event.preventDefault();
  celciusLink.classList.add("active-link");
  fahrenheitLink.classList.remove("active-link");
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showCelciusTemp);

search("New York");
