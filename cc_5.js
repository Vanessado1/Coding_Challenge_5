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
