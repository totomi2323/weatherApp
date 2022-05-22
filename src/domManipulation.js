
const domManipulation = (() => {
    const cityNameChange = (city) => {
document.querySelector(".cityName").textContent = city;
    };
    

    const actualTemperature = ((temp) => {
        document.querySelector(".temperature").textContent = (temp) +' Celsius';
    })
    return {cityNameChange, actualTemperature}
})();
export {domManipulation as domManipulation}