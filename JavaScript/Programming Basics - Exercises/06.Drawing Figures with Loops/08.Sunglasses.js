function solve([arg1]){
    let size = Number(arg1)

    console.log('*'.repeat(size * 2) + ' '.repeat(size) + '*'.repeat(size * 2))
    
    if(size % 2 === 0){
        for(let row = 0;row < Math.floor((size - 1) / 2);row++){
            console.log('*' + '/'.repeat(size * 2 - 2) + '*' + ' '.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')
        }
        console.log('*' + '/'.repeat(size * 2 - 2) + '*' + '|'.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')
        console.log('*' + '/'.repeat(size * 2 - 2) + '*' + ' '.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')

        for(let row = 0;row < Math.floor((size - 1) / 2);row++){
            console.log('*' + '/'.repeat(size * 2 - 2) + '*' + ' '.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')
        }
    }else{
        for(let row = 0;row < Math.floor((size - 1) / 2);row++){
            console.log('*' + '/'.repeat(size * 2 - 2) + '*' + ' '.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')
        }
        console.log('*' + '/'.repeat(size * 2 - 2) + '*' + '|'.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')

        for(let row = 0;row < Math.floor((size - 1) / 2);row++){
            console.log('*' + '/'.repeat(size * 2 - 2) + '*' + ' '.repeat(size) + '*' + '/'.repeat(size * 2 - 2) + '*')
        }
    }
    console.log('*'.repeat(size * 2) + ' '.repeat(size) + '*'.repeat(size * 2))
}

solve(['3'])
solve(['4'])
solve(['5'])
solve(['6'])
solve(['7'])
solve(['8'])
