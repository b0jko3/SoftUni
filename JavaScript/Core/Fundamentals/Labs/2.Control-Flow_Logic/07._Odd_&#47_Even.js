function oddOrEven(number) {
    number = Math.abs(number)
    result = 'invalid'

    if (number % 2 === 0) {
        result = 'even'
    }else if (number % 2 === 1) {
        result = 'odd'
    }
    console.log(result)
}

oddOrEven(5) //odd
oddOrEven(8) //even
oddOrEven(1.5) //invalid
oddOrEven(-3) //odd
