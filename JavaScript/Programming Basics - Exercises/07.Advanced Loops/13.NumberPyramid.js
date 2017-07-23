function solve([arg1]){
    let n = Number(arg1)
    let currentNumber = 1
    let lastCol = 1
    let lastRow = n
    let result = ''

    for (let i = 0; i < lastRow; i++) {
        for (let j = 0; j < lastCol; j++) {
            if(currentNumber === n + 1){
                break
            }
            result += currentNumber + ' '
            currentNumber++
        }
        lastCol++
        console.log(result)
        result = ''
        if(currentNumber === n + 1){
            break
        }
    }
}

solve(['15'])
