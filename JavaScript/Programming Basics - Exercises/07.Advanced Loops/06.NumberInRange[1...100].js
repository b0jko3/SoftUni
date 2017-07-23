function solve(arg){
    for (let i = 0; i < arg.length; i++) {
        let number = Number(arg[i])
        if(number < 1 || number > 100){
            console.log('Invalid number!')
        }else{
            console.log('The number is: ' + number)
        }
    }
}

solve(['105', '0', '-200', '77'])
