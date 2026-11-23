"use strict";
// array of object 
let products = [
    {
        name: "Laptop",
        description: "HP Laptop",
        price: 700
    }, // first object 
    {
        name: "Mouse",
        description: "Wireless Mouse",
        price: 20
    }, // second object 
    {
        name: "Keyboard",
        description: "Gaming Keyboard",
        price: 50
    } // third object 
];
// void function to load products into the container
function loadProducts() {
    let container = document.getElementById("productsContainer"); // بوصل للعنصر من خلال ال ID, يعني روح جيبه 
    if (container) {
        container.innerHTML = ""; // clear the container before adding new products
        for (let product of products) { // loop through each product in the products array
            container.innerHTML += `
    <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    </div>
`;
        }
    }
}
// 3. الوصول إلى الزر
let button = document.getElementById("loadBtn");
// يعني لما اضغط  على الزر شغل هاد الفنكشن 
button?.addEventListener("click", loadProducts);
