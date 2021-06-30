// SALES RECEIPT FUNCTION

// create a variable to hold subtotal
const subtotal = 24.99

// create a variable to hold tax rate
const taxRate = 0.06

// create formula to calculate taxtotal based on subtotal
function calcTaxTotal (subtotal,taxRate) {
    const taxTotal = subtotal * taxRate
    return taxTotal
}
// call the sales tax function with our subtotal ****AND SAVES RESULT AS NEW VARIABLE***
//evaluation (right side) before assignment (left side)
const myTaxTotal = calcTaxTotal(subtotal,taxRate)

// calculate the total = subtotal + taxtotal
const grandTotal = subtotal + myTaxTotal

// display it all...
// console.log("\nSALES RECEIPT\n\n" + "Subtotal: $" + subtotal.toFixed(2) + "\n" + "Tax:      $ " + myTaxTotal.toFixed(2) + "\n" + "----------------\n" + "Total:    $" + grandTotal.toFixed(2) + "\n\n")

// ALTERNATE VERSION - CONSOLE LOG EACH LINE SEPARATELY
console.log("\nSALES RECEIPT\n\n")
console.log("Subtotal: $" + subtotal.toFixed(2))
console.log("Tax:      $ " + myTaxTotal.toFixed(2))
console.log("----------------")
console.log("Total:    $" + grandTotal.toFixed(2) + "\n")
