const todayForecast = (() => {
    const timeToHour =  (unixTime) => {
        let date = new Date(unixTime * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ':' + minutes;
        
        return formattedTime;

    }
    const emptyHourlyContainer = (container) => {
        let removes = document.querySelectorAll(".hourlyBox");
        if (removes) {
          removes.forEach((remove) => {
            container.removeChild(remove);
          });
        }
      };
    
      const createHourlyForecast = (data) => {
        let hourlyForecastContainer = document.querySelector(
          ".hourlyForecastContainer"
        );
        emptyHourlyContainer(hourlyForecastContainer);
    
        let i = 0;
    
        for (i; i <= 11; i++) {
          let temp = data.hourly[i].temp;
          let unixTime = data.hourly[i].dt;
          let timezoneOffset = data.timezone_offset;
          unixTime = unixTime + timezoneOffset;
          let time = timeToHour(unixTime);
          let status = data.hourly[i].weather[0].main;
    
          let hourlyBox = document.createElement("div");
          hourlyBox.classList.add("hourlyBox");
          let temperateBox = document.createElement("div");
          let timeBox = document.createElement("div");
          let statusBox = document.createElement("div");
    
    
          hourlyBox.style.backgroundImage 
          temperateBox.textContent = temp + "C";
          timeBox.textContent = time;
          statusBox.textContent = status;
    
          hourlyForecastContainer.appendChild(hourlyBox);
          hourlyBox.appendChild(temperateBox);
          hourlyBox.appendChild(timeBox);
          hourlyBox.appendChild(statusBox);
        }
      };
    return {createHourlyForecast }
})();
export {todayForecast as todayForecast}