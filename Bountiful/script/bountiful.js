function toggleMenu() {
    document.querySelector("#primary-navigation").classList.toggle("open");
    document.querySelector("#hamburgerButton").classList.toggle("open");

}

const x = document.querySelector("#hamburgerButton");
x.onclick = toggleMenu;


//Last Modified Date script
const el = document.querySelector("#currently");
if (el) {
  el.innerHTML = "Last Modified Date: " + document.lastModified;
}


const datefield = document.querySelector(".currentDate");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `${fulldateUK}`;


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
     // console.log(data);
      displayResult(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResult(data) {
  WeatherHumidity.textContent = data.main.humidity;
  
  CurrentTemp.textContent = data.main.temp;
  const srcicon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const description = data.weather[0].description;

  WeatherIcon.setAttribute('src', srcicon);
  WeatherIcon.setAttribute('alt', description);
  WeatherDescription.textContent = description;
}

apiFetch(); // Call the function to fetch and display the weather data
