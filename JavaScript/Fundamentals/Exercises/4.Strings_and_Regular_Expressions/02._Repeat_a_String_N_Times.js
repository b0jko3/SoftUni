function repeatAStringNTimes(string, repeatCount) {

    withFor(string, repeatCount)

    function withFor(string, repeatCount) {
        let result = ''
        for (let i = 0; i < repeatCount; i++) {
            result += string
        }
        console.log(result)
    }

    withDotRepeat(string, repeatCount)

    function withDotRepeat(string, repeatCount) {
        console.log(string.repeat(repeatCount))
    }
}

repeatAStringNTimes('repeat', 5)
//repeatrepeatrepeatrepeatrepeat

repeatAStringNTimes('magic is real', '3')
//magic is realmagic is realmagic is real
