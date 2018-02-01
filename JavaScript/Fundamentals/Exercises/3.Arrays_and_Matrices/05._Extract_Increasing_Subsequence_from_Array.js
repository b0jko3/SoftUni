function extractIncreasingSubsequenceFromArray(data) {
    let bigNumber = -Infinity
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= bigNumber) {
            console.log(data[i])
            bigNumber = data[i]
        }
    }
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
// 1
// 3
// 8
// 10
// 12
// 24

extractIncreasingSubsequenceFromArray([1, 2, 3, 4])
// 1
// 2
// 3
// 4

extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1])
// 20

extractIncreasingSubsequenceFromArray([20, 20, 2, 15, 6, 1])
// 20
// 20
