// JSON data source
const fruitData = [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Banana" },
    { "id": 3, "name": "Cherry" },
    { "id": 4, "name": "Grape" },
    { "id": 5, "name": "Lemon" },
    { "id": 6, "name": "Mango" },
    { "id": 7, "name": "Orange" },
    { "id": 8, "name": "Peach" },
    { "id": 9, "name": "Pineapple" },
    { "id": 10, "name": "Strawberry" }
];

function populateFruits() {
    const select1 = document.getElementById("fruit1");
    const select2 = document.getElementById("fruit2");
    const select3 = document.getElementById("fruit3");

    fruitData.forEach(fruit => {
        const option1 = new Option(fruit.name, fruit.id);
        const option2 = new Option(fruit.name, fruit.id);
        const option3 = new Option(fruit.name, fruit.id);

        select1.add(option1);
        select2.add(option2);
        select3.add(option3);
    });
}

// Call the function to populate the select elements
populateFruits();
