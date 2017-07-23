function solve([arg]){
    let usd = Number(arg)
    let bgn = 0
    let oneUSDToBGN = 1.79549

    bgn = usd * oneUSDToBGN

    console.log(bgn.toFixed(2))
}

solve(['20'])
solve(['100'])
solve(['12.5'])
