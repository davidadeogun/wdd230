/*Lazy loading*/
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






function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");

}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

let oLastModif = document.lastModified;
let el = document.querySelector("#currently");
el.innerHTML = "Last Modification: "+ oLastModif;


const datefield = document.querySelector(".currentDate");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `${fulldateUK}`;

//Local storage


const visitDisplay = document.querySelector("#visit-info");
const lastVisit = window.localStorage.getItem("last-visit");  

// Determine if this is the first visit or calculate the number of days since the last visit
if (lastVisit) {
  const daysSinceLastVisit = Math.round((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
  visitDisplay.textContent = `It has been ${daysSinceLastVisit} days since your last visit.`;
} else {
  visitDisplay.textContent = "Welcome! This is your first visit.";
}

// Store the current visit timestamp in local storage
localStorage.setItem("last-visit", new Date());
