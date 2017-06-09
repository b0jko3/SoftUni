function solve([arg1,arg2]){
    let hours = Number(arg1)
    let minutes = Number(arg2)

    minutes += 15

    if(minutes > 59){
        hours += 1
        minutes -= 60
    }

    if(hours > 23){
        hours = 0
    }

    if(minutes < 10){
        console.log(`${hours}:0${minutes}`)
    }else{
        console.log(`${hours}:${minutes}`)
    }
}

solve(['1','46'])
solve(['0','01'])
solve(['23','59'])
solve(['12','49'])
