function evenPositionElements(numbers) {
    let result = ''
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            result += numbers[i] + ' '
        }
    }
    return result.trim()
}

console.log(evenPositionElements(['20', '30', '40'])) //20 40
console.log(evenPositionElements(['5', '10'])) //5
