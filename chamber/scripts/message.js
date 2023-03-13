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
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const spotlight1 = document.querySelector('.spotlight1');
        spotlight1.querySelector('h3').textContent = data[1].company;
        spotlight1.querySelector('p').textContent = data[1].slogan;
        spotlight1.querySelector('a').textContent = data[1].websiteurl;
        spotlight1.querySelector('.phone-number').textContent = data[1].phone;

        let image1 = data[1].logo;
        let BrandLogo1 = spotlight1.querySelector('img');
        BrandLogo1.setAttribute('src', image1);


        const spotlight2 = document.querySelector('.spotlight2');
        spotlight2.querySelector('h3').textContent = data[5].company;
        spotlight2.querySelector('p').textContent = data[5].slogan;
        spotlight2.querySelector('a').textContent = data[5].websiteurl;
        spotlight2.querySelector('.phone-number').textContent = data[5].phone;

        let image2 = data[5].logo;
        let BrandLogo2 = spotlight2.querySelector('img');
        BrandLogo2.setAttribute('src', image2);


        const spotlight3 = document.querySelector('.spotlight3');
        spotlight3.querySelector('h3').textContent = data[7].company;
        spotlight3.querySelector('p').textContent = data[7].slogan;
        spotlight3.querySelector('a').textContent = data[7].websiteurl;
        spotlight3.querySelector('.phone-number').textContent = data[7].phone;

        let image3 = data[7].logo;
        let BrandLogo3 = spotlight3.querySelector('img');
        BrandLogo3.setAttribute('src', image3);

    })
    .catch(error => console.error(error));



