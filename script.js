const customerName = "Sara"
const customerAge = 28
let availableBalance = 1000

console.log("| Item Number | Food Item | Price |")
console.log("| 1 | Burger   | $10 |")
console.log("| 2 | Pizza    | $15 |")
console.log("| 3 | Sandwich | $8  |")
console.log("| 4 | Pasta    | $12 |")
console.log("| 5 | Exit     | $0  |")


let foodprice = 0;
switch (foodprice) {
    case "burger":
        foodprice = 10;
        break;
    case "pizza":
        foodprice = 15;
        break;
    case "sandwich":
        foodprice = 8;
        break;
    case "pasta":
        foodprice = 12;
        break;
    case "exit":
        foodprice = 0;
        break;}

const choice = 3;

switch (choice){
    case 1 :
        console.log("you ordered a burger. price: $10")
        break;
    case 2:
        console.log("you ordered a pizza. price: $15");
        break;
    case 3:
        console.log("you have ordered a a Sandwitch. price: $8");
        break;
    case 4:
        console.log("you have ordered a Pasta. price: $12");
        break;
    case 5:
        console.log("thank you for visiting us!")
        break;
    default:
        console.log("invalid selection")
}

// let quantity = 2;
// let totalPrice = 0;
// // calcualte
// let calculate = (quantity, price) => {
//     const totalprice = quantity * price;
//     return totalprice;
// }
// function calculateTotalPrice(quantity, price) {
//     const totalPrice = quantity * price;
//     return totalPrice;
// }
let quantity = 2;
let totalPrice = quantity * 8;
const currentBalance = 100;
const remaininBalance = currentBalance - totalPrice
console.log(remaininBalance)

console.log(`you ordered ${quantity} sabdwitches each costs 8 dollars and the total price is ${totalPrice} dollars
    you have ${currentBalance} in your account and your remaining balance is ${remaininBalance}`)

if (remaininBalance > 5){
    console.log("you can buy more items")
}




if (customerAge <= 18){
    console.log("you are underage.")
}else{
    console.log("you are an adult.")
    if (currentBalance < totalPrice) {
        console.log("insufficient balance.")
    } else {
        console.log("your order has been successfully placed.")
    }
}


// boolean part
customerAge >= 18
currentBalance > totalPrice
quantity > 0
totalPrice === 0
remaininBalance >= 0

// payment methode
method = 1
switch (method){
    case 1:
        console.log("you can pay with your card")
        break;
    case 2:
        console.log("you can pay with cash")
        break;
    case 3:
        console.log("you can pay through bank transfer")
        break;
    default:
        console.log("invalid payment method")
}