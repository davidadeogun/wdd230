//Lazy loading
const images = document.querySelectorAll("[data-src]");


function preloadImage(img) {
    const src= img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries,
     imgObserver) => {
       entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
       })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

//End - Lazy Loading







//Hamburger button script
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
//End of Hamburger button script



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

// End of Last Modified Date script


// WEATHER FORECAST SCRIPT
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.158&lon=-117.351&exclude=minutely,hourly,alerts&appid=c2aca1c7991c8e388fe1ab63e0fe2cc9";
let WeatherIcon = document.querySelector('#weathericon');
let CurrentTemp = document.querySelector('#temp');
let WeatherDescription = document.querySelector('#weather-description');
let WeatherHumidity = document.querySelector('#humidity-value');
let FirstDayTemp = document.querySelector('#firstdaytemp');
let SecondDayTemp = document.querySelector('#seconddaytemp');
let ThirdDayTemp = document.querySelector('#thirddaytemp');


async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data)
          displayResult(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}


apiFetch();

function displayResult(data) {
  if (WeatherHumidity) {
      WeatherHumidity.textContent = data.current.humidity;
  }

  if (CurrentTemp) {
      CurrentTemp.textContent = data.current.temp;
  }

  if (FirstDayTemp) {
    FirstDayTemp.textContent = data.daily[0].temp.day;
  }

  if (SecondDayTemp) {
    SecondDayTemp.textContent = data.daily[1].temp.day;
  }

  if (ThirdDayTemp) {
    ThirdDayTemp.textContent = data.daily[2].temp.day;
  }

  

  if (WeatherIcon && WeatherDescription) {
      const srcicon = `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
      const description = data.current.weather[0].description;

      WeatherIcon.setAttribute('src', srcicon);
      WeatherIcon.setAttribute('alt', description);
      WeatherDescription.textContent = description;
  }
}





