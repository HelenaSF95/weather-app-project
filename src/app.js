function getWeather(response) {
  console.log(response.data.city);
  console.log(response.data.condition.description);
  console.log(response.data.condition.icon_url);
  console.log(Math.round(response.data.temperature.current));
  console.log(Math.round(response.data.temperature.humidity));
  console.log(Math.round(response.data.wind.speed));
  console.log(response.data.time);
}

let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
let city = `Paris`;
let units = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(url).then(getWeather);
