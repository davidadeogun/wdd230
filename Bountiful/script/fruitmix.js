function populateSelect(select, fruits) {
  fruits.forEach(fruit => {
    const option = document.createElement("option");
    option.value = fruit.id;
    option.textContent = fruit.name;
    select.appendChild(option);
  });
}

function displayOutput(order) {
  const outputElement = document.getElementById("output");
  const orderDate = new Date().toLocaleString();

  const output = `
Order Details:
First Name: ${order.firstName}
Email: ${order.email}
Phone: ${order.phone}
Fruit 1: ${order.fruit1.name}
Fruit 2: ${order.fruit2.name}
Fruit 3: ${order.fruit3.name}
Special Instructions: ${order.specialInstructions}
Order Date: ${orderDate}

Total Nutrients:
Carbohydrates: ${(order.fruit1.nutritions.carbohydrates + order.fruit2.nutritions.carbohydrates + order.fruit3.nutritions.carbohydrates).toFixed(2)} g
Protein: ${(order.fruit1.nutritions.protein + order.fruit2.nutritions.protein + order.fruit3.nutritions.protein).toFixed(2)} g
Fat: ${(order.fruit1.nutritions.fat + order.fruit2.nutritions.fat + order.fruit3.nutritions.fat).toFixed(2)} g
Sugar: ${(order.fruit1.nutritions.sugar + order.fruit2.nutritions.sugar + order.fruit3.nutritions.sugar).toFixed(2)} g
Calories: ${(order.fruit1.nutritions.calories + order.fruit2.nutritions.calories + order.fruit3.nutritions.calories).toFixed(2)} kcal
  `;

  outputElement.textContent = output;
}


function updateSubmittedDrinksCount() {
  let count = localStorage.getItem("submittedDrinksCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("submittedDrinksCount", count);
  displaySubmittedDrinksCount();
}

function displaySubmittedDrinksCount() {
  const count = localStorage.getItem("submittedDrinksCount") || 0;
  const infoCard = document.getElementById("info-card");
  if (infoCard) {
    infoCard.textContent = `Total Submitted Specialty Drinks: ${count}`;
  }
}





function processForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1Id = document.getElementById("fruits1").value;
const fruit2Id = document.getElementById("fruits2").value;
const fruit3Id = document.getElementById("fruits3").value;
const specialInstructions = document.getElementById("special-instructions").value;

const fruit1 = fruits.find(fruit => fruit.id === parseInt(fruit1Id));
const fruit2 = fruits.find(fruit => fruit.id === parseInt(fruit2Id));
const fruit3 = fruits.find(fruit => fruit.id === parseInt(fruit3Id));

const order = {
firstName,
email,
phone,
fruit1,
fruit2,
fruit3,
specialInstructions,
};

displayOutput(order);
updateSubmittedDrinksCount();
//displaySubmittedDrinksCount();
}

let fruits = [];

fetch("fruits.json")
.then(response => response.json())
.then(data => {
fruits = data;
populateSelect(document.getElementById("fruits1"), fruits);
populateSelect(document.getElementById("fruits2"), fruits);
populateSelect(document.getElementById("fruits3"), fruits);
});

document.getElementById("order-form").addEventListener("submit", processForm);


