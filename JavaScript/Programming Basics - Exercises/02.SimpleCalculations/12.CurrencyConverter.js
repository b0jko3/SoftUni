function solve([arg1, arg2, arg3]){
    let amountToConvert = Number(arg1)
    let inputCurrency = arg2
    let outputCurrency = arg3
    let oneUSDToBGN = 1.79549
    let oneEURToBGN = 1.95583
    let oneGBPToBGN = 2.53405
    let result = 0

    if(inputCurrency === 'USD'){
        result += amountToConvert * oneUSDToBGN
    }else if(inputCurrency === 'EUR'){
        result += amountToConvert * oneEURToBGN
    }else if(inputCurrency === 'GBP'){
        result += amountToConvert * oneGBPToBGN
    }else {
        result += amountToConvert
    }

    if(outputCurrency === 'USD'){
        result /= oneUSDToBGN
    }else if(outputCurrency === 'EUR'){
        result /= oneEURToBGN
    }else if(outputCurrency === 'GBP'){
        result /= oneGBPToBGN
    }

    console.log(result.toFixed(2) + ' ' + outputCurrency)
}

solve(['20','USD','BGN'])
solve(['100','BGN','EUR'])
solve(['12.35','EUR','GBP'])
solve(['150.35','USD','EUR'])
