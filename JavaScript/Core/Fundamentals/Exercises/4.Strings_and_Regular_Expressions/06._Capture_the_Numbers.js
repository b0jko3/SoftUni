function captureTheNumbers(strings) {
    let result = ''
    const regex = /[0-9]+/g
    let m
    for (let i = 0; i < strings.length; i++) {
        while ((m = regex.exec(strings[i])) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                result += String(match) + ' '
            })
        }
    }
    console.log(result.trim())
}

captureTheNumbers([
'The300',
'What is that?',
'I think it’s the 3rd movie.',
'Lets watch it at 22:45'])
//300 3 22 45
captureTheNumbers([
'123a456',
'789b987',
'654c321',
'0'])
//123 456 789 987 654 321 0
