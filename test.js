/* 
function oddOrEvenSingle(number1) {
    if(number1 % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
const myNumber1 = 2
oddOrEvenSingle(myNumber1)
 */


/* 
function oddOrEvenArray(testArray) {
    for(arrayIndex = 0; arrayIndex < testArray.length; arrayIndex++) {
        if(testArray[arrayIndex] % 2 === 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
const myTestArray = [123,49439,392,737,222,84,2,29,3,1,0]
oddOrEvenArray(myTestArray)
 */

function squareNumsInArray(myArray) {
    for(i=0; i < myArray.length; i++) {
        let squaredProduct = myArray[i] **2
        console.log(squaredProduct)
    }
}
const myTestArray = [123,49439,392,737,222,84,2,29,3,1,0]
squareNumsInArray(myTestArray)