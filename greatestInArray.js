// find greatest in array
const arrayOfNumbers = [1,238,23,38448,9999999999,293,573729,3838,38382,03,727777]

function findGreatest(myArray) {
    let highestNumber = 0
    for (let i=0; i<myArray.length; i++) {
        if (myArray[i] > highestNumber) {
            highestNumber = myArray[i]
        }
    }
    return highestNumber
}
console.log(findGreatest(arrayOfNumbers))