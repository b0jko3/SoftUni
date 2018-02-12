function bitcoinMining(gold) {
    gold = gold.map(Number)
    let days = gold.length
    let money = 0
    let bitcoins = 0
    let bitcoinDay = 0
    let thirdDay = 0

    for (let i = 0; i < days; i++) {
        if (thirdDay === 2) {
            money += (gold[i] * 67.51) - (gold[i] * 67.51 * 0.3)
            thirdDay = 0
        } else {
            money += gold[i] * 67.51
            thirdDay += 1
        }
        while (money >= 11949.16) {
            if (bitcoins === 0) {
                bitcoinDay = i + 1
            }
            bitcoins++
            money -= 11949.16
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (bitcoinDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${bitcoinDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

// bitcoinMining(['100', '200', '300'])
// Bought Bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

bitcoinMining(['3124.15', '504.212', '2511.124'])
// Bitcoins bought: 30
// Day of the first purchased bitcoin: 1
// Money left: 5144.11 lv.
