function wordsUppercase(data) {
    let result = ''
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case ' ':
                if ((data[i + 1] !== ' ') && (data[i + 1] !== '.') && (data[i + 1] !== '') && (data[i + 1] !== undefined)) {
                    result += ', '
                }
                break;
            case '\n':
            case '\r\n':
            case '\r':
            case '`' :
            case '~' :
            case '"' :
            case "'" :
            case '[' :
            case ']' :
            case '{' :
            case '}' :
            case '|' :
            case '\\' :
            case '<' :
            case '>' :
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '$':
            case '=':
            case '@':
            case '^':
            case '#':
            case '%':
            case '&':
            case '*':
            case '(':
            case ')':
            case '/':
            case '+':
            case '_':
            case ';':
            case ':':
            case '-':
            case '.':
            case ',':
            case '!':
            case '?':
                if ((data[i + 1] !== ' ') && (data[i + 1] !== '.') && (data[i + 1] !== '') && (data[i + 1] !== undefined)) {
                    result += ', '
                }
                break;
        
            default:
                result += data[i].toUpperCase()
                break;
        }
    }
    console.log(result)
}

wordsUppercase('Hi, how are you?') //HI, HOW, ARE, YOU
wordsUppercase('hello') //HELLO
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')
//FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS
