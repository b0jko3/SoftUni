function solve([arg1, arg2, arg3]){
    let start = arg1.charCodeAt(0)
    let end = arg2.charCodeAt(0)
    let miss = arg3.charCodeAt(0)

    let result = ''
    let count = 0

    for(i = start; i <= end; i++){
        if(i != miss){
            for(j = start; j <= end; j++){
                if(j != miss){
                    for(k = start; k <= end; k++){
                        if(k != miss){
                            result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + ' '
                            count++
                        }
                    }
                }
            }
        }
    }
    console.log(result + count)
}

solve(['a','c','b'])
