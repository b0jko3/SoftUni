function solve([arg1]){
    let size = Number(arg1)

    for(let row = 0; row <= size; row++){
        console.log(' '.repeat(size - row) + '*'.repeat(row) + ' | ' + '*'.repeat(row))
    }
}

solve(['4'])
