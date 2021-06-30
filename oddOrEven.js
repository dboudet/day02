
// new lines added


function isEvenSingle(number1) {
    if(number1 % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
const myNumber1 = 2
isEvenSingle(myNumber1)


function isEvenArray(testArray) {
    for(arrayIndex = 0; arrayIndex < testArray.length; arrayIndex++) {
        if(testArray[arrayIndex] % 2 === 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
const myTestArray = [123,49439,392,737,222,84,2,29,3,1,0]
isEvenArray(myTestArray)


