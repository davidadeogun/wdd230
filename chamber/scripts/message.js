//JS Display Msg
const d = new Date();
let day = d.getDay();

let displayMsg = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

let Message = function () {
    if (day == 1 || day == 2) {
        document.querySelector("#group-msg").innerHTML = displayMsg;
    }

};

Message();

//Index script for the spotlight
function filterMembership(data) {
    return data.filter(item => item.membershiplevel === 'Silver' || item.membershiplevel === 'Gold');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const filteredData = filterMembership(data);
        shuffleArray(filteredData);

        const spotlights = ['spotlight1', 'spotlight2', 'spotlight3'];

        for (let i = 0; i < spotlights.length; i++) {
            const spotlight = document.querySelector(`.${spotlights[i]}`);

            // Check if the spotlight element exists
            if (spotlight) {
                const item = filteredData[i];

                spotlight.querySelector('h3').textContent = item.company;
                spotlight.querySelector('p').textContent = item.slogan;
                spotlight.querySelector('a').textContent = item.websiteurl;
                spotlight.querySelector('.phone-number').textContent = item.phone;

                let BrandLogo = spotlight.querySelector('img');
                BrandLogo.setAttribute('src', item.logo);
            }
        }
    })
    .catch(error => console.error(error));






