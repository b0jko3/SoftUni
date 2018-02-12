function spiceMustFlow([yield]) {
    let startingYield = Number(yield)
    let days = 0
    let result = 0

    while (startingYield >= 100) {
        result += startingYield
        days++
        startingYield -= 10
        result -= 26
    }
    if (result >= 26) {
        result -= 26
    }
    console.log(days)
    console.log(result)
}

// spiceMustFlow(['111'])
// 2
// 134

// spiceMustFlow(['450'])
// 36
// 8938

spiceMustFlow(['200'])
// 11
// 1338
