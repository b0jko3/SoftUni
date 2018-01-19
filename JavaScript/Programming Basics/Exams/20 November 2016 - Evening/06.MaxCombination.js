function solve([arg1,arg2,arg3]){
    let firstNumber = Number(arg1)
    let secondNumber = Number(arg2)
    let maxCombinations = Number(arg3)
    let result = ''

    
    for(i = firstNumber; i <= secondNumber; i++){
        for(j = firstNumber; j <= secondNumber; j++){
            if(maxCombinations <= 0){
                break
            }
            result += `<${i}-${j}>`
            maxCombinations-=1
        }
    }
    
    console.log(result)
}

solve(['1','4','5'])
