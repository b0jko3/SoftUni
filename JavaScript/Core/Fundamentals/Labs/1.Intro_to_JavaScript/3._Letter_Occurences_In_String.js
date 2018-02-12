function letterOccurencesInString(arg1,arg2) {
    let word = arg1
    let letter = arg2
    let occurences = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            occurences += 1
        }
    }
    console.log(occurences);
}

letterOccurencesInString('hello', 'l')
