function solve([arg1]){
    let number = Number(arg1)

    if((number != 0 && number < 100) || (number != 0 && number > 200)){
        console.log('invalid')
    }
}

solve(['75'])
solve(['150'])
solve(['220'])
solve(['199'])
solve(['-1'])
solve(['100'])
solve(['200'])
solve(['0'])
