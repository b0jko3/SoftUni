function solve([arg1,arg2,arg3,arg4]){
    let dancers = Number(arg1)
    let points = Number(arg2)
    let season = arg3   //summer / winter
    let place = arg4    //Bulgaria / Abroad

    let money = 0
    let charity = 0
    let salary = 0

    if(season === 'summer'){
        if(place === 'Bulgaria'){
            money = (dancers * points) - (dancers * points * 0.05)
        }else if(place === 'Abroad'){
            money = (dancers * points) + (dancers * points * 0.5) - ((dancers * points) + (dancers * points * 0.5)) * 0.1
        }
    }else if(season === 'winter'){
        if(place === 'Bulgaria'){
            money = (dancers * points) - (dancers * points * 0.08)
        }else if(place === 'Abroad'){
            money = (dancers * points) + (dancers * points * 0.5) - ((dancers * points) + (dancers * points * 0.5)) * 0.15
        }
    }
    charity = money * 0.75
    salary = (money - charity)/dancers

    console.log(`Charity - ${charity.toFixed(2)}`)
    console.log(`Money per dancer - ${salary.toFixed(2)}`)
}

solve(['1','89.5','summer','Abroad'])
