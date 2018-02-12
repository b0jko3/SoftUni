function aggregateElements(data) {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        sum += data[i]
    }
    let inverseSum = 0
    for (let i = 0; i < data.length; i++) {
        inverseSum += 1 / data[i]
    }
    let string = ''
    for (let i = 0; i < data.length; i++) {
        string += data[i]
    }
    console.log(sum)
    console.log(inverseSum)
    console.log(string)
}

aggregateElements([1, 2, 3])
//6
//1.8333
//123

aggregateElements([2, 4, 8, 16])
//30
//0.9375
//24816
