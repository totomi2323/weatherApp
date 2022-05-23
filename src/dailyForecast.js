const dailyForecast = (() => {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const timeToDay =  (unixTime) => {
        let date = new Date(unixTime * 1000);
        let day = date.getDay();
        let formattedTime = weekdays[day];
        
        return formattedTime;

    }
    const emptyDailyContainer = (container) => {
        let removes = document.querySelectorAll(".dailyForecast");
        if (removes) {
          removes.forEach((remove) => {
            container.removeChild(remove);
          });
        }
      };
    
      const createDailyForecast = (data) => {
        let dailyForecastContainer = document.querySelector(
          ".dailyForecastContainer"
        );
        emptyDailyContainer(dailyForecastContainer);
    
        let i = 0;
    
        for (i; i <= 6; i++) {
          let tempDay = data.daily[i].temp.day;
          let tempNight = data.daily[i].temp.night;
          let unixTime = data.daily[i].dt;
          let timezoneOffset = data.timezone_offset;
          unixTime = unixTime + timezoneOffset;
          let time = timeToDay(unixTime);
          let status = data.daily[i].weather[0].main;
    
          let dailyForecast = document.createElement("div");
          dailyForecast.classList.add("dailyForecast");
          let temperateBoxDay = document.createElement("div");
          let temperateBoxNight = document.createElement("div");
          let timeBox = document.createElement("div");
          let statusBox = document.createElement("div");
    
    
          dailyForecast.style.backgroundImage 
          temperateBoxDay.textContent = "Day: " + tempDay + "C";
          temperateBoxNight.textContent = "Night: " +tempNight + "C";
          timeBox.textContent = time;
          statusBox.textContent = status;
    
          dailyForecastContainer.appendChild(dailyForecast);
          dailyForecast.appendChild(temperateBoxDay);
          dailyForecast.appendChild(temperateBoxNight);
          dailyForecast.appendChild(timeBox);
          dailyForecast.appendChild(statusBox);
        }
      };

    return {timeToDay, createDailyForecast}
})();
export {dailyForecast as dailyForecast}