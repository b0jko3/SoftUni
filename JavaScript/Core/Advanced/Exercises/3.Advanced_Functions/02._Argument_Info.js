function argumentInfo(...params) {
    let stringsCount = 0
    let numbersCount = 0
    let functionsCount = 0

    for (let i = 0; i < params.length; i++) {
        console.log(`${typeof(params[i])}: ${params[i]}`)
        if (typeof(params[i]) === 'object') {
            for(let key in params[i]){
                if (typeof(params[i][key]) === 'string') {
                    stringsCount += 1
                } else if (typeof(params[i][key]) === 'number') {
                    numbersCount += 1
                } else if (typeof(params[i][key]) === 'function') {
                    functionsCount += 1
                }
            }
        }
        if (typeof(params[i]) === 'string') {
            stringsCount += 1
        } else if (typeof(params[i]) === 'number') {
            numbersCount += 1
        } else if (typeof(params[i]) === 'function') {
            functionsCount += 1
        }
    }
    if (stringsCount > 0 &&
        stringsCount > numbersCount &&
        stringsCount > functionsCount) {
        console.log('string = ' + stringsCount)
        if (numbersCount > 0 &&
            numbersCount > functionsCount) {
            console.log('number = ' + numbersCount)
            if (functionsCount > 0) {
                console.log('function = ' + functionsCount)
            }
        } else if (functionsCount > 0) {
            console.log('function = ' + functionsCount)
            if (numbersCount > 0) {
                console.log('number = ' + numbersCount)
            }
        }
    } else if (numbersCount > 0 &&
        numbersCount > functionsCount) {
        console.log('number = ' + numbersCount)
        if (functionsCount > 0 &&
            functionsCount > stringsCount) {
            console.log('function = ' + functionsCount)
            if (stringsCount > 0) {
                console.log('string = ' + stringsCount)
            }
        } else if (stringsCount > 0) {
            console.log('string = ' + stringsCount)
            if (functionsCount > 0) {
                console.log('function = ' + functionsCount)
            }
        }
    } else if (functionsCount > 0) {
        console.log('function = ' + functionsCount)
        if (numbersCount > 0 &&
            numbersCount > stringsCount) {
            console.log('number = ' + numbersCount)
            if (stringsCount > 0) {
                console.log('string = ' + stringsCount)
            }
        } else if (stringsCount > 0) {
            console.log('string = ' + stringsCount)
            if (numbersCount > 0) {
                console.log('number = ' + numbersCount)
            }
        }
    }
}

// argumentInfo('cat', 42, function () { console.log('Hello world!') })
argumentInfo({ name: 'bob'}, 3.333, 9.999)

