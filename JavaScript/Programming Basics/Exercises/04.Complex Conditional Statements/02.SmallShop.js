function solve([arg1, arg2, arg3]){
    let product = arg1
    let city = arg2
    let amountOfProduct = arg3

    let coffeeInSofia = 0.5
    let waterInSofia = 0.8
    let beerInSofia = 1.2
    let sweetsInSofia = 1.45
    let peanutsInSofia = 1.6

    let coffeeInPlovdiv = 0.4
    let waterInPlovdiv = 0.7
    let beerInPlovdiv = 1.15
    let sweetsInPlovdiv = 1.3
    let peanutsInPlovdiv = 1.5

    let coffeeInVarna = 0.45
    let waterInVarna = 0.7
    let beerInVarna = 1.1
    let sweetsInVarna = 1.35
    let peanutsInVarna = 1.55

    let money = 0

    if(city === 'Sofia'){
        if(product === 'coffee'){
            money = amountOfProduct * coffeeInSofia
        }else if(product === 'water'){
            money = amountOfProduct * waterInSofia
        }else if(product === 'beer'){
            money = amountOfProduct * beerInSofia
        }else if(product === 'sweets'){
            money = amountOfProduct * sweetsInSofia
        }else if(product === 'peanuts'){
            money = amountOfProduct * peanutsInSofia
        }else{
            console.log('invalid product')
        }
    }else if(city === 'Plovdiv'){
        if(product === 'coffee'){
            money = amountOfProduct * coffeeInPlovdiv
        }else if(product === 'water'){
            money = amountOfProduct * waterInPlovdiv
        }else if(product === 'beer'){
            money = amountOfProduct * beerInPlovdiv
        }else if(product === 'sweets'){
            money = amountOfProduct * sweetsInPlovdiv
        }else if(product === 'peanuts'){
            money = amountOfProduct * peanutsInPlovdiv
        }else{
            console.log('invalid product')
        }
    }else if(city === 'Varna'){
        if(product === 'coffee'){
            money = amountOfProduct * coffeeInVarna
        }else if(product === 'water'){
            money = amountOfProduct * waterInVarna
        }else if(product === 'beer'){
            money = amountOfProduct * beerInVarna
        }else if(product === 'sweets'){
            money = amountOfProduct * sweetsInVarna
        }else if(product === 'peanuts'){
            money = amountOfProduct * peanutsInVarna
        }else{
            console.log('invalid product')
        }
    }else{
        console.log('invalid city')
    }
    console.log(money)
}

solve(['coffee','Varna','2'])
solve(['peanuts','Plovdiv','1'])
solve(['beer','Sofia','6'])
solve(['water','Plovdiv','3'])
solve(['sweets','Sofia','2.23'])
