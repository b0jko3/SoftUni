function solve([arg1,arg2]){
    let a = Number(arg1)
    let b = Number(arg1)
    let smaller = 0

    if(a<b){
        smaller = a
    }else{
        smaller = b
    }
    for(i = smaller; i <= 0; i--){
        if(a % i === 0 && b % i === 0){
            console.log(i)
        }
    }
}

solve(['24','16'])
