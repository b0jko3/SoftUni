function solve(arg){
    let days = Number(arg[0])
    let dancers = Number(arg[1])
    let hours = 0
    let energyLost = 0
    let energyLeft = 0
    let currentDay = 1

    energyLeft = dancers * days * 100

    for(i = 2; i < days + 2; i++){
        hours = Number(arg[i])
        if(currentDay % 2 === 0){
            if(hours % 2 === 0){
                energyLost += dancers * 68
            }else{
                energyLost += dancers * 65
            }
        }else{
            if(hours % 2 === 0){
                energyLost += dancers * 49
            }else{
                energyLost += dancers * 30
            }
        }
        currentDay++
    }
    energyLeft -= energyLost
    energyLeft = energyLeft/dancers/days

    if(energyLeft >= 50){
        console.log(`They feel good! Energy left: ${energyLeft.toFixed(2)}`)
    }else if(energyLeft < 50){
        console.log(`They are wasted! Energy left: ${energyLeft.toFixed(2)}`)
    }
}

solve(['4','10','5','8','2','3'])
