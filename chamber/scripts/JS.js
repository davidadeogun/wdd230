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


