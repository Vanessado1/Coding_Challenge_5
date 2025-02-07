// Task 1: Object Profile
// Declared customer 
let customer = {
    name:"John Doe",
    age: 35,
    email:"john.doe@gmail.com"
};
// Created a for loop to log the objects individually 
for (let key in customer){
    if (customer.hasOwnProperty(key))
    console.log(`${key}: ${customer[key]}`)
}

// Task 2: Object Methods 
//Declared order 
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder () { // used displayOrder method to display information individually 
        console.log(`OrderID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }};
order.displayOrder(); // logs the orderId, totalAmount, and status 

// Task 3: Array Manipulation 
let cartItems = ["Candy", "Chips","Milk"];
cartItems.push('Eggs'); // added Eggs to the array using push
cartItems.pop('Eggs'); // removed Eggs by using pop
cartItems.unshift("Cookies"); // added Cookies at the beginning using unshift 
cartItems.shift('Cookies'); // removed Cookies by using shift
console.log(cartItems); // logs the new updated array 

// Task 4: Map Method 
// Declared price array 
let prices = [100, 200, 300];
let discount = 0.1; // Declared a 10% discount 
let discountedPrices = prices.map(prices => prices * discount); // Used .map() to apply the discount on prices 
console.log(discountedPrices); // logged the new discounted prices 

// Task 5: Filter Method 
// Declared inventory array 
let inventory = [5, 0, 12, 8, 0];
let stock = inventory.filter(inventory => inventory >= 1); // Used .filter to remove zero stock
console.log(stock); // logged the new inventory 

// Task 6: Reduce Method 
// Declared sales array 
let sales = [500, 300, 200, 400];
let totalRev = sales.reduce((sum, sales) => sum + sales); // Calculated total revenue using .reduce 
console.log('Total Revenue:',totalRev); // logged the total revenue 

// Task 7: find() Method 
// Declared customer array 
let customers = ['ALice', 'Bob', 'Charlie', 'David'];
let name = customers.find(customer => customer === 'Charlie'); // Used .find() to find the name Charlie 
console.log(name); 

// Task 8: Function Declaration 
// created a function to calculate the tax amount 
function calculateTax(amount, taxRate) {
    return amount * taxRate 
}
let amount = 100; // Declared the amount 
let taxRate = 0.1; // Declared the tax rate 
let taxAmount = calculateTax(amount, taxRate); 
console.log(`Calculated Taxes: $${taxAmount}`); // logged the calculated tax amount 

// Task 9: Function Expression 
// created a function to apply discounts 
function applyDiscount(price, discounts) {
    return price * discounts 
}
let price = 150; // Declared price 
let discounts = 0.05; // Declared discounts
console.log(`Discounted Price: $${applyDiscount(price, discounts)}`); // logged the discounted price 

// Task 10: Arrow Function 
// created arrow function to calculate discount 
const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);
let purchaseAmount = 200; // Declared purchase amount
console.log(`Points Collected: ${calculatePoints(purchaseAmount)}`); // logged the points 