function buildAWall(sections) {
    let totalDays = 0
    for (let i = 0; i < sections.length; i++) {
        sections[i] = Number(sections[i])
        totalDays = Math.max(totalDays, 30 - sections[i])
    }
    let dailyConcreteUsed = []
    for (let i = 0; i < totalDays; i++) {
        dailyConcreteUsed[i] = 0
    }
    let pesos = 0
    for (let i = 0; i < sections.length; i++) {
        let days = 30 - sections[i]
        for (let j = 0; j < days; j++) {
            dailyConcreteUsed[j] += 195
            pesos += 195 * 1900
        }
    }
    console.log(dailyConcreteUsed.join(', '))
    console.log(pesos + ' pesos')
}

buildAWall(['21', '25', '28'])
// 585, 585, 390, 390, 390, 195, 195, 195, 195
// 5928000 pesos

// buildAWall(['17'])
// 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195
// 4816500 pesos

// buildAWall(['17', '22', '17', '19', '17'])
// 975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585
// 21489000 pesos
