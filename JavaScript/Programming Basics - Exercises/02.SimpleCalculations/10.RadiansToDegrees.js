function solve([arg]){
    let rad = Number(arg)
    let deg = 0

    deg = rad * 180 / 3.14

    console.log(Math.round(deg))
}

solve(['3.1416'])
solve(['6.2832'])
solve(['0.7854'])
solve(['0.5236'])
