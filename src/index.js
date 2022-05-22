import "./style.css";
import { domManipulation } from "./domManipulation";
let lon;
let lat;
let city = "London";
let temperature;
async function fetchWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&APPID=70244536032e49aec9b00220e6d9d46b",
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  temperature = data.main.temp;
  lon = data.coord.lon;
  lat = data.coord.lat;
  console.log(temperature);
  dailyForecast(lat, lon);
  domManipulation.actualTemperature(temperature);
}
fetchWeather();
domManipulation.cityNameChange(city);

async function dailyForecast(lat, lon) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "5&lon=" +
      lon +
      "&units=metric&appid=70244536032e49aec9b00220e6d9d46b",
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
}
