import "./style.css";
import { actualWeather } from "./domManipulation";
import {dailyForecast} from "./dailyForecast";
import { todayForecast } from "./todayForecast";

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

 actualWeather.displayActualWeather(data);
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
  todayForecast.createHourlyForecast(data);

  let dailyForecastData = data.daily;
  console.log(dailyForecastData);
  let sg = dailyForecast.timeToDay(dailyForecastData[0].dt);
  dailyForecast.createDailyForecast(data);
  
}

