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