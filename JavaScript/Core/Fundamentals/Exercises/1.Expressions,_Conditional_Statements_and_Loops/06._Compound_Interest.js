function compoundInterest([principalSum, interestRate, compoundingFrequency, overallLength]) {
    let compoundingPeriod = 12 / compoundingFrequency
    let result = principalSum * ((1 + (interestRate / 100 / compoundingPeriod)) ** (compoundingPeriod * overallLength))
    
    console.log(result.toFixed(2))
}

compoundInterest([1500, 4.3, 3, 6]) //1938.84
compoundInterest([100000, 5, 12, 25]) //338635.49
