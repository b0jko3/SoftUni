function solve([arg1]){
    let number = Number(arg1)
    let result = 1

    console.log(result)

    for(i=0; i<number;i++){
        console.log(result*=2)
    }
}

solve(['10'])
