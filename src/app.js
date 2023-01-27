function getWeather(response) {
  console.log(response);
}

let apiKey = `abodftdf7899f82673d6451a0b0db4af`;
let city = `Paris`;
let units = `metric`;
let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(url).then(getWeather);
