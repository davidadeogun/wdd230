let windSpeedKm = document.querySelector("#wind-speed-value").value;
let tempCelsius = document.querySelector("#temp-value").value;

let temFah = (tempCelsius * 9 / 5) + 32;
let windSpeedMiles = windSpeedKm * 1.609;

let windChill = 35.74 + 0.6215 * temFah - 35.75 * Math.pow(windSpeedMiles, 0.16) + 0.4275 * temFah * Math.pow(windSpeedMiles, 0.16);

let displayResult = function() {
  if (windSpeedMiles > 3 && temFah <= 50) {
    document.querySelector("#wind-chill-display").textContent = windChill;
  } else {
    document.querySelector("#wind-chill-display").textContent = "N/A";
  }
};

displayResult();
