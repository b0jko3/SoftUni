function solve([arg1,arg2,arg3]){
    let steps = Number(arg1)
    let dancers = Number(arg2)
    let days = Number(arg3)

    let stepsPerDay = 0
    let stepsPerDancer = 0

    stepsPerDay = Math.ceil(((steps/days)/steps)*100)
    stepsPerDancer = (stepsPerDay/dancers).toFixed(2)

    if(stepsPerDay <= 13){
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancer}%.`)
    }else{
        console.log(`No, They will not succeed in that goal! Required ${stepsPerDancer}% steps to be learned per day.`)
    }
}

solve(['10464','20','20'])
