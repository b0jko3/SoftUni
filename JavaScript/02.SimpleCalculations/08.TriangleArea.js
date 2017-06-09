function solve([arg1, arg2]){
    let a = Number(arg1)
    let h = Number(arg2)
    let area = 0

    area = a * h / 2

    console.log('Triangle area = ' + area.toFixed(2))
}

solve(['20', '30'])
solve(['15', '35'])
solve(['7.75', '8.45'])
solve(['1.23456', '4.56789'])