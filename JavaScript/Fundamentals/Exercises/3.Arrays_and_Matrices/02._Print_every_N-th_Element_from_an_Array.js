function printEveryNthElementFromAnArray(data) {
    let n = Number(data[data.length - 1])
    for (let i = 0; i < data.length - 1; i += n) {
        console.log(data[i])
    }
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20', '2'])
// 5
// 31
// 20

printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset', '2'])
// dsa
// test

printEveryNthElementFromAnArray(['1', '2', '3', '4', '5', '6'])
// 1
