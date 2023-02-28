let windSpeedKm = parseInt(document.querySelector("#wind-speed-value").innerHTML);
let tempCelsius = parseInt(document.querySelector("#temp-value").innerHTML);

//Convert Celsius to fahrenheit
let temFah = (tempCelsius * 9 / 5) + 32;

//Convert Km to Miles
let windSpeedMiles = windSpeedKm * 1.609;


//Calculate windchill
let windChill = 35.74 + 0.6215 * temFah - 35.75 * Math.pow(windSpeedMiles, 0.16) + 0.4275 * temFah * Math.pow(windSpeedMiles, 0.16);

//store function as a variable
let displayResult = function() {
  if (windSpeedMiles > 3 && temFah <= 50) {
    document.querySelector("#wind-chill-display").textContent = windChill.toFixed(2) + "°F";
  } else {
    document.querySelector("#wind-chill-display").textContent = "N/A";
  }
};

//call the function 
displayResult();

