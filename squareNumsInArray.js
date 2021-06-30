//version 1 - with Chris in class
/* 
function squaredNums(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i] ** 2)
    }
}
const listOfNum = [2, 5, 7, 9, 11]
squaredNums(listOfNum)
*/

//version 1b - displaying results in array
let squaredResults = []
function squaredNums(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        squaredResults.push(myArray[i] ** 2)        
    }
}
const listOfNum = [2, 5, 7, 9, 11]
squaredNums(listOfNum)
console.log(squaredResults)

//version 2 (my way from home; saving each result to variable... but is it not useable?)
/* 
let resultArray = []
function squareNumsInArray(myArray) {
    for(i=0; i < myArray.length; i++) {
        resultArray.push(myArray[i] **2)
    }
}
const myTestArray = [1,2,3,4,5,6,7,8,9,10]
squareNumsInArray(myTestArray)
console.log(resultArray)
 */

// version 3 while loop
/* 
function squareNumsArrayWhile(myArray2) {
    let i=0
    while(i<myArray2.length-1) {        //why do I need the length - 1?
        i++
        console.log(myArray2[i] **2)
    }
}
const myTestArray = [123,49439,392,737,222,84,2,29,3,1]
squareNumsArrayWhile(myTestArray)
 */

//version 4 do/while loop
/* 
function squareNumsArrayWhile(myArray2) {
    let i=0
    do {
        i++
        console.log(myArray2[i])
    }
    while(i<myArray2.length-1)
}
const myTestArray = [123,49439,392,737,222,84,2,29,3,1]
squareNumsArrayWhile(myTestArray)
 */

//version 5 foreach
/* 
const myArray = [1,2,3,4,5,6,7,8,9,10]
myArray.forEach(function(a, i) {
    console.log(a**2)
})
 */
    
