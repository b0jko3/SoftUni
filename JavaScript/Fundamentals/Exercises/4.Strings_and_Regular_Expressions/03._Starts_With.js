function startsWith(string, startString) {
    for (let i = 0; i < startString.length; i++) {
        if (string[i] !== startString[i]) {
            return false
        }
    }
    return true
}

console.log(startsWith('How have you been?', 'how')) //false
console.log(startsWith('The quick brown fox…', 'The quick brown fox…')) //true
