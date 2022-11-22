// Write your solution in this file!
var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// let bestCustomer
// console.log(bestCustomer);

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'john';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'mat';
    return leastFavoriteCustomer;
}

changeLeastFavoriteCustomer();
console.log(changeLeastFavoriteCustomer());
