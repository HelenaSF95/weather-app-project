function getWeather(response) {
  let cityElement = document.querySelector("#city");
  let descripElement = document.querySelector("#description");
  let tempElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  //let weatherIcon = document.querySelector("#current-weather-emoji");

  cityElement.innerHTML = response.data.city;
  descripElement.innerHTML = response.data.condition.description;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  //weatherIcon.innerHTML = response.data.condition.icon_url;

  console.log(response.data.condition.icon_url);
  console.log(response.data.time);
}

let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
let city = `Paris`;
let units = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(url).then(getWeather);
