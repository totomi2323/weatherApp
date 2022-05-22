const todayForecast = (() => {
    const timeToHour =  (unixTime) => {
        let date = new Date(unixTime * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = hours + ':' + minutes;
        
        return formattedTime;

    }
    return {timeToHour}
})();
export {todayForecast as todayForecast}