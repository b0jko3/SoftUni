function solve([arg1]){
    let size = Number(arg1)

    for(let row = 1; row <= size; row++){
        console.log(' '.repeat(size - row) + '* '.repeat(row))
    }
    for(let row = size - 1; row >= 1; row--){
        console.log(' '.repeat(size - row) + '* '.repeat(row))
    }
}

solve(['4'])
