function squareOfStars([arg1]){
    let n = Number(arg1)
    let firstRow = ''
    let middleRows = ''
    let lastRow = ''

    for (let i = 0; i < n; i++) {
        firstRow += '*'
        lastRow += '*'
    }
    if(n<3){
        console.log(firstRow)
        console.log(lastRow)
    }else{
        for (let j = 0; j < n-2; j++) {
            middleRows += '*'
            for (let k = 0; k < n-2; k++){
                middleRows += ' '
            }
            if(j == n-3){
                middleRows += '*'
            }else{
                middleRows += '*\n'
            }
        }
        console.log(firstRow)
        console.log(middleRows)
        console.log(lastRow)
    }
}

squareOfStars(["2"])
squareOfStars(["3"])
squareOfStars(["4"])
squareOfStars(["5"])
