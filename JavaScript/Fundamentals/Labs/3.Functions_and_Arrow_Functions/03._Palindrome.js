function palindrom(data) {
    let halfDataLength = Math.floor(data.length / 2)
    let dataL = data.length - 1
    for (let i = 0; i < halfDataLength;) {
        for (let j = dataL; j >= halfDataLength;) {
            if (data[i] === data[j]) {
                i++
                j--
            } else {
                return false
            }
        }
    }
    return true
}

console.log(palindrom('haha')) //false
console.log(palindrom('ababa')) //true
