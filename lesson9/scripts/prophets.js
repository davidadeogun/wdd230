const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        // Create the HTML elements for the card
        let card = document.createElement("section").innerHTML;
        let h2 = document.createElement("h2").innerHTML;
        let portrait = document.createElement("img");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        

    
        // Set the content and attributes for each element
        h2.textContent = `${prophet.name[1]} ${prophet.lastname[1]}`;
        portrait.setAttribute("src", prophet.imageurl1);
        image.setAttribute("alt", `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        paragraph1.textContent = `Date of Birth: ${prophet.birthdate}`;
        paragraph2.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append each element to the card
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(paragraph1);
        card.appendChild(paragraph2);

        // Append the card to the container
        cards.appendChild(card);
    });
};
