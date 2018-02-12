function capitalizeTheWords(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        let isSpaceOrUndefined = (string[i - 1] === undefined || string[i - 1] === ' ')
        if (isSpaceOrUndefined) {
            result += string[i].toUpperCase()
        } else if (string[i] !== ' ' && string[i] !== string[i].toLowerCase()) {
            result += string[i].toLowerCase()
        } else {
            result += string[i]
        }
    }
    console.log(result)
}

capitalizeTheWords('Capitalize these words')
//Capitalize These Words
capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!')
//Was That Easy? Try This One For Size!
