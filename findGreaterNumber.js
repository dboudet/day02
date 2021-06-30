
function findGreater(a,b) {
    if (a>b){
        return a
    } else if (b>a) {
        return b
    } else {
        return "they must be equal"
    }
}

const num1 = 321
const num2 = 123

console.log(findGreater(num1,num2))