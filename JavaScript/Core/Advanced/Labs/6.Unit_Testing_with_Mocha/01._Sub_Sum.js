function subSum(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN
    }
    if (start < 0) {
        start = 0
    }
    if (end > array.length - 1) {
        end = array.length - 1
    }
    let result = 0
    for (let i = start; i <= end; i++) {
        result += Number(array[i])
    }
    return result
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)) // 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)) // 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)) // NaN
console.log(subSum([], 1, 2)) // 0
console.log(subSum('text', 0, 2)) // NaN
