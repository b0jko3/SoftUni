function endsWith(string, endString) {
    let j = endString.length - 1
    for (let i = string.length - 1; i >= 0 && j >= 0 ; i--, j--) {
        if (string[i] !== endString[j]) {
            return false
        }
    }
    return true
}

console.log(endsWith('This sentence ends with fun?', 'fun?')) //true
console.log(endsWith('This is Houston, we have…', 'We have…')) //false
