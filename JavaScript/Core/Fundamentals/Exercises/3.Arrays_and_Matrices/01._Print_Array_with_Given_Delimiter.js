function printArrayWithGivenDelimiter(data) {
    let delimiter = data[data.length - 1]
    let result = ''
    for (let i = 0; i < data.length - 1; i++) {
        if (i === data.length - 2) {
            result += `${data[i]}`
        } else {
            result += `${data[i]}` + `${delimiter}`
        }
    }
    console.log(result)
}

printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-'])
//One-Two-Three-Four-Five

printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'])
//How about no?_I_will_not_do_it!
