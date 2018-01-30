function smallestTwoNumbers(numbers) {
    let result = ''
    let firstSmall = Infinity
    let secondSmall = Infinity
    
    for (let i = 0; i < numbers.length; i++) {
        if (firstSmall > numbers[i]) {
            secondSmall = firstSmall
            firstSmall = numbers[i]
        }else if (secondSmall > numbers[i]) {
            secondSmall = numbers[i]
        }
    }
    result = Number(firstSmall) + ' ' + Number(secondSmall)
    console.log(result)
}

smallestTwoNumbers([30, 15, 50, 5]) //5 15
smallestTwoNumbers([3, 0, 10, 4, 7, 3]) //0 3
smallestTwoNumbers([-300, -15, -50, 5]) //-300 -50
smallestTwoNumbers([-300, -300, -50, 5]) //-300 -300
