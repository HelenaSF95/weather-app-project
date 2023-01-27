function getWeather(response) {
  console.log(response.data.city);
  console.log(response.condition.description);
  console.log(response.condition.icon_url);
  console.log(response.temperature.current);
  console.log(response.temperature.humidity);
  console.log(response.wind.speed);
  console.log(response.time);
}

let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
let city = `Paris`;
let units = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(url).then(getWeather);
