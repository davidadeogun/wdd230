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
  Carbohydrates: ${(order.fruit1.carbs + order.fruit2.carbs + order.fruit3.carbs).toFixed(2)} g
  Protein: ${(order.fruit1.protein + order.fruit2.protein + order.fruit3.protein).toFixed(2)} g
  Fat: ${(order.fruit1.fat + order.fruit2.fat + order.fruit3.fat).toFixed(2)} g
  Sugar: ${(order.fruit1.sugar + order.fruit2.sugar + order.fruit3.sugar).toFixed(2)} g
  Calories: ${(order.fruit1.calories + order.fruit2.calories + order.fruit3.calories).toFixed(2)} kcal
    `;
  
    outputElement.textContent = output;
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
  