function rotateArray(data) {
    let n = Number(data[data.length - 1])
    data.pop()
    let shortN = Math.floor(n % data.length)

    for (let i = 0; i < shortN; i++) {
        data.unshift(data[data.length - 1])
        data.pop()
    }
    console.log(data.join(' '))
}

rotateArray(['1', '2', '3', '4', '2'])
// 3 4 1 2

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
// Orange Coconut Apple Banana
