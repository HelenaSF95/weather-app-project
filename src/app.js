function formatDate(timestamp) {
  let currentDate = new Date(timestamp);
  console.log(currentDate);
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
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function getWeather(response) {
  let cityElement = document.querySelector("#city");
  let descripElement = document.querySelector("#description");
  let tempElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  //let weatherIcon = document.querySelector("#current-weather-emoji");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.city;
  descripElement.innerHTML = response.data.condition.description;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  //weatherIcon.innerHTML = response.data.condition.icon_url;

  console.log(response.data.condition.icon_url);
  console.log(response.data.time);
}

let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
let city = `Paris`;
let units = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(url).then(getWeather);
