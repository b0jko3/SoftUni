function solve([arg1, arg2, arg3]){
    let first = Number(arg1)
    let second = Number(arg2)
    let third = Number(arg3)

    let seconds = first + second + third
    let minutes = Math.floor(seconds / 60)
    seconds = seconds - minutes * 60

    if(seconds < 10){
        console.log(minutes + ":0" + seconds)
    }else{
        console.log(minutes + ":" + seconds)
    }
}

solve(['35','45','44'])
