function solve([arg1,arg2,arg3]){
    let typeOfFigure = arg1
    let firstNumber = Number(arg2)
    let secondNumber = Number(arg3)

    let result = 0
    let pi = Math.PI

    if(typeOfFigure === 'square'){
        result = firstNumber * firstNumber
    }else if(typeOfFigure === 'rectangle'){
        result = firstNumber * secondNumber
    }else if(typeOfFigure === 'circle'){
        result = firstNumber * firstNumber * pi
    }else if(typeOfFigure === 'triangle'){
        result = firstNumber * secondNumber / 2
    }
    console.log(result.toFixed(3))
}

solve(['square','5',''])
solve(['rectangle','7','2.5'])
solve(['circle','6',''])
solve(['triangle','4.5','20'])
