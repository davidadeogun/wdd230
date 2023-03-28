function toggleMenu() {
  const primaryNav = document.querySelector("#primary-navigation");
  const hamburgerButton = document.querySelector("#hamburgerButton");

  if (primaryNav) {
      primaryNav.classList.toggle("open");
  }
  if (hamburgerButton) {
      hamburgerButton.classList.toggle("open");
  }
}

const x = document.querySelector("#hamburgerButton");
if (x) {
  x.onclick = toggleMenu;
}

// Last Modified Date script
const el = document.querySelector("#currently");
if (el) {
  el.innerHTML = "Last Modified Date: " + document.lastModified;
}

const datefield = document.querySelector(".currentDate");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full"
}).format(now);

if (datefield) {
  datefield.innerHTML = `${fulldateUK}`;
}

// WEATHER FORECAST SCRIPT
const url = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Carlsbad,US&appid=45cbeba524e314291fb64c4344e17a93";
let WeatherIcon = document.querySelector('#weathericon');
let CurrentTemp = document.querySelector('#temp');
let WeatherDescription = document.querySelector('#weather-description');
let WeatherHumidity = document.querySelector('#humidity-value');

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          displayResult(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

function displayResult(data) {
  if (WeatherHumidity) {
      WeatherHumidity.textContent = data.main.humidity;
  }

  if (CurrentTemp) {
      CurrentTemp.textContent = data.main.temp;
  }

  if (WeatherIcon && WeatherDescription) {
      const srcicon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const description = data.weather[0].description;

      WeatherIcon.setAttribute('src', srcicon);
      WeatherIcon.setAttribute('alt', description);
      WeatherDescription.textContent = description;
  }
}

apiFetch(); // Call the function to fetch and display the weather data
