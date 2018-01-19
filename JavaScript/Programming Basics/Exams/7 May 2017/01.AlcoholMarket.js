function solve([arg1, arg2, arg3, arg4, arg5]){
    let priceWhiskey = Number(arg1)
    let litersBeer = Number(arg2)
    let litersWine = Number(arg3)
    let litersRakia = Number(arg4)
    let litersWhiskey = Number(arg5)

    let priceRakia = priceWhiskey * 0.5
    let priceWine = priceRakia * 0.4
    let priceBeer = priceRakia * 0.8

    let money = 0

    money += litersRakia * priceRakia
    money += litersWine * priceWine
    money += litersBeer * priceBeer
    money += litersWhiskey * priceWhiskey

    console.log(money.toFixed(2))
}

solve(['50', '10', '3.5', '6.5', '1'])
//solve(['63.44', '3.57','6.35', '8.15', '2.5'])
