function solve([arg1]){
    let number = Number(arg1)
    let result = 1

    console.log(result)

    for(i=1; i<=number;i++){
        result*=2
        if(i % 2 === 0){
            console.log(result)
        }
    }
}

solve(['3'])
