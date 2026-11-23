const storeName = "ElectroShop";
const description = "Electronics Store";
const Currency = "JOD";
let numberOfProducts = 5;
let isStoreOpen = true;
console.log(storeName);
console.log(description);
console.log(Currency);
console.log(numberOfProducts);
console.log(isStoreOpen);
let productNames = ["Laptop", "Phone", "Keyboard", "Headphones", "Mouse"];
let productDetails = [
    "Laptop", 1000, true,
    "Phone", 500, true,
    "Keyboard", 100, false,
    "Headphones", 200, true,
    "Mouse", 50, true
];
if (isStoreOpen) {
    console.log("Store is open");
}
else {
    console.log("Store is closed");
}
let price = productDetails[1];
if (typeof price === "number") {
    console.log(`The price of the product is ${price} ${Currency}`);
    if (price > 500) {
        console.log("The product is expensive");
    }
    else if (100 <= price && price <= 500) {
        console.log("The product is Medium Price");
    }
    else if (price < 100) {
        console.log("The product is affordable");
    }
}
for (let i = 0; i < productNames.length; i++) {
    console.log(productNames[i]);
}
let count = 0;
for (let i = 0; i < productDetails.length; i++) {
    let item = productDetails[i];
    if (typeof item === "number" && item > 100) {
        count++;
    }
}
console.log(`Number of products with price > 100: ${count}`);
function calculateDiscount(price, discountPercentage) {
    let discountAmount = (price * discountPercentage) / 100;
    let discountedPrice = price - discountAmount;
    return discountedPrice;
}
console.log(calculateDiscount(200, 10));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(5));
function displayStoreMessage(message) {
    console.log(` ${message}`);
}
displayStoreMessage("Welcome to ElectroShop!");
function displayProductInfo(name, price, currency = "USD", description) {
    console.log(`Product Name: ${name}`);
    console.log(`Price: ${price} ${currency}`);
    if (description) {
        console.log(`Description: ${description}`);
    }
}
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
let products = [
    {
        name: "Laptop",
        price: 1000,
        description: "A high-performance laptop"
    },
    {
        name: "Phone",
        price: 500,
        description: "A smartphone with advanced features"
    },
    {
        name: "Headphones",
        price: 200,
        description: "Wireless headphones with high-quality sound"
    }
];
const loadProductsBtn = document.getElementById("loadProductsBtn");
const productsContainer = document.getElementById("productsContainer");
loadProductsBtn?.addEventListener("click", () => {
    if (productsContainer) {
        productsContainer.innerHTML = "";
        for (let product of products) {
            productsContainer.innerHTML += `
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: ${product.price} JOD</p>
                </div>
                <hr>
            `;
        }
    }
});
export {};
