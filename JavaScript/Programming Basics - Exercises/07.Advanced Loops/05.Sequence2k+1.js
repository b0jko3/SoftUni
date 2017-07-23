function solve([arg1]){
    let number = Number(arg1)
    let result = 1

    while(result <= number){
        console.log(result)
        result = result * 2 + 1
    }
}

solve(['3'])
