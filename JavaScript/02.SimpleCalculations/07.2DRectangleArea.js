function solve([arg1, arg2, arg3, arg4]){
    let x1 = Number(arg1)
    let y1 = Number(arg2)
    let x2 = Number(arg3)
    let y2 = Number(arg4)
    let result1 = 0
    let result2 = 0
    let area = 0
    let perimeter = 0

    if(x1>x2){
        result1 = x1 - x2
    }else{
        result1 = x2 - x1
    }
    if(y1>y2){
        result2 = y1 - y2
    }else{
        result2 = y2 - y1
    }

    area = result1 * result2
    perimeter = 2 * (result1 + result2)

    console.log(area)
    console.log(perimeter)
}

solve(['60', '20', '10', '50'])
solve(['30', '40', '70', '-10'])
solve(['600.25', '500.75', '100.50', '-200.5'])
