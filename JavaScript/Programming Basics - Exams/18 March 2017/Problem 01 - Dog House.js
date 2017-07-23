function solve([arg1, arg2]){
    let a = Number(arg1)
    let b = Number(arg2)

    let areaGreen = 0
    let areaRed = 0

    areaGreen = a*a + a/2*a + a/2*(b-a/2) - a/5*a/5
    areaRed = a*a

    console.log((areaGreen / 3).toFixed(2))
    console.log((areaRed / 5).toFixed(2))
}

solve(['6','10'])
