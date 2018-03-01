function requestValidator(obj) {
    checkMethod('POST')
    let validUriRegex = /^(?:[A-Za-z0-9.]+)$/g
    checkVersion('HTTP/0.9')
    console.log(checkMessage('<script>alert("xss vulnerable")</script>'))

    function checkMethod(str) {
        const validMethod = 'GET' === str || 'POST' === str || 'DELETE' === str || 'CONNECT' === str
        if (validMethod) {
            return true
        } else {
            return false
        }
    }
    function checkUri(str) {
        //to do
    }
    function checkVersion(str) {
        const validVersion = 'HTTP/0.9' === str || 'HTTP/1.0' === str || 'HTTP/1.1' === str || 'HTTP/2.0' === str
        if (validVersion) {
            return true
        } else {
            return false
        }
    }
    function checkMessage(str) {
        const validMessageRegex = /^(?:(?![<>\\&'"]+)[\s\S]+)$/g //fix this
        let m

        while ((m = validMessageRegex.exec(str)) !== null) {
            if (m.index === validMessageRegex.lastIndex) {
                validMessageRegex.lastIndex++
            }
            m.forEach((match, groupIndex) => {
                console.log(`Found match, group ${groupIndex}: ${match}`)
            })
        }
        // if (validMessage) {
        //     return true
        // } else {
        //     return false
        // }
    }
}

console.log(requestValidator())




// const regex = /^(?:[A-Za-z0-9.]+)$/g
// const str = ''
// let m;

// while ((m = regex.exec(str)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m.index === regex.lastIndex) {
//         regex.lastIndex++;
//     }
    
//     // The result can be accessed through the `m`-variable.
//     m.forEach((match, groupIndex) => {
//         console.log(`Found match, group ${groupIndex}: ${match}`);
//     });
// }
