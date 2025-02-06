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