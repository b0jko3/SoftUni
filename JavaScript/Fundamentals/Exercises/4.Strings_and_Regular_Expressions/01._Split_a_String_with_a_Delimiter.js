function splitAStringWithADelimiter(string, delimiter) {
    let splitElements = string.split(delimiter)
    for (let i = 0; i < splitElements.length; i++) {
        console.log(splitElements[i])
    }
}

splitAStringWithADelimiter('One-Two-Three-Four-Five', '-')
// One
// Two
// Three
// Four
// Five

