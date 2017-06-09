function solve([arg1,arg2,arg3]){
    let firstNumber = Number(arg1)
    let secondNumber = Number(arg2)
    let thirdNumber = Number(arg3)

    if(firstNumber == secondNumber){
        if(firstNumber == thirdNumber){
            console.log('yes')
        }else{
            console.log('no')
        }
    }else{
        console.log('no')
    }
}

solve(['1','1','1'])
solve(['1','2','1'])
solve(['1','1','12'])
