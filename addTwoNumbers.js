// METHOD 1
const num1 = 123
const num2 = 321

function addTwoNumbers(firstNumber,secondNumber) {
    const total = firstNumber + secondNumber
    return total
}

const myTotal = addTwoNumbers(num1,num2)
console.log(myTotal)


// METHOD 2
function addTwoNumbersAlt() {
    const num1Alt = 123
    const num2Alt = 321
    const totalAlt = num1Alt + num2Alt
    return totalAlt
}

console.log(addTwoNumbersAlt())


// METHOD 3
function addTwoNumbersAlt2() {
    const num1Alt2 = 123
    const num2Alt2 = 321
    return num1Alt2 + num2Alt2
}

console.log(addTwoNumbersAlt2())


// METHOD 4 (Michelle)
const number1 = 123
const number2 = 321
const number3 = 111
const number4 = 999

function addNumbers(a,b) {
    return a+b
}

console.log(addNumbers(number3,number4))