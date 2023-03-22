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

