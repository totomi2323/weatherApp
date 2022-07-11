import { weatherBackground } from "./weatherBackground";

const actualWeather = (() => {
  const cityNameChange = (city) => {
    document.querySelector(".cityName").textContent = city;
  };

  const actualTemperature = (temp) => {
    document.querySelector(".temperature").textContent = temp + " Celsius";
  };

  const status = (status) => {
    document.querySelector(".status").textContent = status;
    let displayPics = document.querySelector("#actualPics");
    displayPics.src = weatherBackground.displayStatus(status);
  };

  const timeToActual = (unixTime, timeZone) => {
    let localTime = unixTime + (timeZone) - 3600;
    let date = new Date(localTime * 1000);
    let hours = date.getHours();
    let minutes =  "0" + date.getMinutes();
    let formattedTime = hours + ":" + minutes.substr(-2);
    let displayTime = document.querySelector(".time");
    displayTime.textContent = "Time: " + formattedTime;
    console.log(formattedTime);
  };

  const minMaxTemperature = (min, max) => {
   let minDiv = document.querySelector(".minTemp");
   let maxDiv = document.querySelector(".maxTemp");

   min = Math.round(min * 10) /10;
   max = Math.round(max * 10) /10;
    minDiv.textContent = "Lowest temp: "+ min +" C";
    maxDiv.textContent = "Highest temp :"+ max  +" C";
  }
  const displayActualWeather = (data) => {
    cityNameChange(data.name);
    let temp = data.main.temp;
    temp = Math.round(temp * 10) / 10;
    actualTemperature(temp);
    status(data.weather[0].main);
    timeToActual(data.dt, data.timezone);
    minMaxTemperature(data.main.temp_min, data.main.temp_max);
  };

  return { displayActualWeather };
})();
export { actualWeather as actualWeather };
