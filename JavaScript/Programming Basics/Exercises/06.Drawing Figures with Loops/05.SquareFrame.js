function solve([arg1]){
    let size = Number(arg1)

    console.log('+ ' + '- '.repeat(size - 2) + '+')

    for(let row = 0; row < size - 2; row++){
        console.log('| ' + '- '.repeat(size - 2) + '|')
    }
    console.log('+ ' + '- '.repeat(size - 2) + '+')
}

solve(['4'])
