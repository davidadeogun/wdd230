let windSpeedKm = 0;
let tempCelsius = 0;

const windSpeedValue = document.querySelector("#wind-speed-value");
const tempValue = document.querySelector("#temp-value");
if (windSpeedValue && tempValue) {
  windSpeedKm = parseInt(windSpeedValue.innerHTML);
  tempCelsius = parseInt(tempValue.innerHTML);
}

//Convert Celsius to fahrenheit
let temFah = (tempCelsius * 9 / 5) + 32;

//Convert Km to Miles
let windSpeedMiles = windSpeedKm * 1.609;

//Calculate windchill
let windChill = 35.74 + 0.6215 * temFah - 35.75 * Math.pow(windSpeedMiles, 0.16) + 0.4275 * temFah * Math.pow(windSpeedMiles, 0.16);

//store function as a variable
let displayResult = function() {
  const windChillDisplay = document.querySelector("#wind-chill-display");
  if (windChillDisplay && windSpeedMiles > 3 && temFah <= 50) {
    windChillDisplay.textContent = windChill.toFixed(2) + "°F";
  } else if (windChillDisplay) {
    windChillDisplay.textContent = "N/A";
  }
};

//call the function 
displayResult();
