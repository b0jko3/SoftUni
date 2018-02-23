function argumentInfo(...params) {
    let stringsCount = 0
    let numbersCount = 0
    let functionsCount = 0
    let first = ''
    let second = ''

    for (let i = 0; i < params.length; i++) {
        console.log(`${typeof(params[i])}: ${params[i]}`)
        if (typeof(params[i]) === 'object') {
            for(let key in params[i]){
                if (typeof(params[i][key]) === 'string') {
                    stringsCount += 1
                    if (first === '') {
                        first = 'string'
                    } else if (second === '') {
                        second = 'string'
                    }
                } else if (typeof(params[i][key]) === 'number') {
                    numbersCount += 1
                    if (first === '') {
                        first = 'number'
                    } else if (second === '') {
                        second = 'number'
                    }
                } else if (typeof(params[i][key]) === 'function') {
                    functionsCount += 1
                    if (first === '') {
                        first = 'function'
                    } else if (second === '') {
                        second = 'function'
                    }
                }
            }
        }
        if (typeof(params[i]) === 'string') {
            stringsCount += 1
            if (first === '') {
                first = 'string'
            } else if (second === '') {
                second = 'string'
            }
        } else if (typeof(params[i]) === 'number') {
            numbersCount += 1
            if (first === '') {
                first = 'number'
            } else if (second === '') {
                second = 'number'
            }
        } else if (typeof(params[i]) === 'function') {
            functionsCount += 1
            if (first === '') {
                first = 'function'
            } else if (second === '') {
                second = 'function'
            }
        }
    }
    if (stringsCount > 0 &&
        ((stringsCount > numbersCount && stringsCount > functionsCount) ||
        (first === 'string' && (stringsCount >= numbersCount && stringsCount >= functionsCount)))) {
        console.log('string = ' + stringsCount)
        if (numbersCount > 0 &&
            numbersCount > functionsCount &&
            second === 'number') {
            console.log('number = ' + numbersCount)
            if (functionsCount > 0) {
                console.log('function = ' + functionsCount)
            }
        } else if (functionsCount > 0 &&
            second === 'function') {
            console.log('function = ' + functionsCount)
            if (numbersCount > 0) {
                console.log('number = ' + numbersCount)
            }
        }
    } else if (numbersCount > 0 &&
        (numbersCount > functionsCount ||
        (first === 'number' && (numbersCount >= stringsCount && numbersCount >= functionsCount)))) {
        console.log('number = ' + numbersCount)
        if (functionsCount > 0 &&
            functionsCount >= stringsCount &&
            second === 'function') {
            console.log('function = ' + functionsCount)
            if (stringsCount > 0) {
                console.log('string = ' + stringsCount)
            }
        } else if (stringsCount > 0 &&
            second === 'string') {
            console.log('string = ' + stringsCount)
            if (functionsCount > 0) {
                console.log('function = ' + functionsCount)
            }
        }
    } else if (functionsCount > 0 &&
        (first === 'function' && (functionsCount >= stringsCount && functionsCount >= numbersCount))) {
        console.log('function = ' + functionsCount)
        if (numbersCount > 0 &&
            numbersCount >= stringsCount &&
            second === 'number') {
            console.log('number = ' + numbersCount)
            if (stringsCount > 0) {
                console.log('string = ' + stringsCount)
            }
        } else if (stringsCount > 0 &&
            second === 'string') {
            console.log('string = ' + stringsCount)
            if (numbersCount > 0) {
                console.log('number = ' + numbersCount)
            }
        }
    }
}

// argumentInfo('cat', 42, function () { console.log('Hello world!') })
argumentInfo({ name: 'bob'}, 3.333, 9.999)

