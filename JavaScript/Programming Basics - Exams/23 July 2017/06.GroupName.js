function solve([arg1,arg2,arg3,arg4,arg5]){
    let first = arg1.charCodeAt(0)
    let second = arg2.charCodeAt(0)
    let third = arg3.charCodeAt(0)
    let fourth = arg4.charCodeAt(0)
    let fifth = Number(arg5)

    let result = ''
    let count = 0

    let bigLetterA = 65
    let smallLetterA = 97

    for (let i = bigLetterA; i <= first; i++) {
        for (let j = smallLetterA; j <= second; j++) {
            for (let k = smallLetterA; k <= third; k++) {
                for (let l = smallLetterA; l <= fourth; l++) {
                    for (let m = 0; m <= fifth; m++) {
                        count++
                    }
                }
            }
        }
    }
    console.log(count - 1)
}

solve(['K','a','b','c','5'])
