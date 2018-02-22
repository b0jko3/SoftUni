function sortArray(inputArray, command) {
    if (command === 'asc') {
        return inputArray.sort((a, b) => a - b)
    } else if (command === 'desc') {
        return inputArray.sort((a, b) => b - a)
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc')) // [6, 7, 8, 14, 17]
console.log(sortArray([14, 7, 17, 6, 8], 'desc')) // [17, 14, 8, 7, 6]
