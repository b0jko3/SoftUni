function airPollution(sofiaMap, forces) {
    for (let i = 0; i < sofiaMap.length; i++) {
        sofiaMap[i] = sofiaMap[i].split(' ').map(Number)
    }
    for (let i = 0; i < forces.length; i++) {
        forces[i] = forces[i].split(' ')
    }
    for (let i = 0; i < forces.length; i++) {
        for (let k = 0; k < sofiaMap.length; k++) {
            for (let l = 0; l < sofiaMap[k].length; l++) {
                if (forces[i][0] === 'breeze') {
                    if (Number(forces[i][1]) === k) {
                        sofiaMap[k][l] = sofiaMap[k][l] - 15
                        if (sofiaMap[k][l] < 0) {
                            sofiaMap[k][l] = 0
                        }
                    }
                } else if (forces[i][0] === 'gale') {
                    if (Number(forces[i][1]) === l) {
                        sofiaMap[k][l] = sofiaMap[k][l] - 20
                        if (sofiaMap[k][l] < 0) {
                            sofiaMap[k][l] = 0
                        }
                    }
                } else if (forces[i][0] === 'smog') {
                    sofiaMap[k][l] = sofiaMap[k][l] + Number(forces[i][1])
                }
            }
        }
    }
    let isPolluted = false
    let result = []
    let k = 0
    for (let i = 0; i < sofiaMap.length; i++) {
        for (let j = 0; j < sofiaMap[i].length; j++) {
            if (sofiaMap[i][j] >= 50) {
                if (!isPolluted) {
                    isPolluted = true
                }
                result[k++] = `[${i}-${j}]`
            }
        }
    }
    if (!isPolluted) {
        console.log('No polluted areas')
    } else {
        console.log('Polluted areas: ' + result.join(', '))
    }
}

airPollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"])

  // Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1]
