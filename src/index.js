import "./style.css";
import { domManipulation } from "./domManipulation";
import {todayForecast} from "./todayForecast";
let lon;
let lat;
let city = "London";
let temperature;
let searchValue;

let searchButton = document.querySelector(".search");
searchButton.addEventListener("click", function () {
  searchValue = document.querySelector(".searchValue").value;
  console.log(searchValue);

  if (searchValue === "") {
    city = "London";
    fetchWeather();
  } else {
    city = searchValue;
    fetchWeather();
  }
});

async function fetchWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&APPID=70244536032e49aec9b00220e6d9d46b",
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  lon = data.coord.lon;
  lat = data.coord.lat;
  dailyForecastFetching(lat, lon);

  domManipulation.cityNameChange(data.name);
  domManipulation.actualTemperature(data.main.temp);
  domManipulation.status(data.weather[0].main);
}
fetchWeather();

async function dailyForecastFetching(lat, lon) {
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
  domManipulation.createHourBox(data);
  let hourlyForecast =  data.hourly;
  console.log(hourlyForecast)
}

