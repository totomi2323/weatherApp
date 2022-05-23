
const domManipulation = (() => {
    
  const cityNameChange = (city) => {
    document.querySelector(".cityName").textContent = city;
  };

  const actualTemperature = (temp) => {
    document.querySelector(".temperature").textContent = temp + " Celsius";
  };

  const status = (status) => {
    document.querySelector(".status").textContent = status;
  };

  
  return { cityNameChange, actualTemperature, status };
})();
export { domManipulation as domManipulation };
