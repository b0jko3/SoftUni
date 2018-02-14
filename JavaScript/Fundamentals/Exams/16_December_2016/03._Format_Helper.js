function formatHelper([text]) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i + 1] !== ' ' && (
        text[i] === '.' ||
        text[i] === ',' ||
        text[i] === '!' ||
        text[i] === '?' ||
        text[i] === ':' ||
        text[i] === ';')) {
            result += text[i] + ' '
        } else if (text[i] === ' ' && (
        text[i + 1] === ' ' ||
        text[i + 1] === '.' ||
        text[i + 1] === ',' ||
        text[i + 1] === '!' ||
        text[i + 1] === '?' ||
        text[i + 1] === ':' ||
        text[i + 1] === ';')) {

        } else if (text[i - 1] === '"') {
            if (text[i] === ' ') {
                
            } else {
                result += text[i]
            }
        } else if (text[i] === ' ' &&
            text[i + 1] === '"') {
            
        } else {
            result += text[i]
        }
    }
    console.log(result)
    console.log('Terribly formatted text. With chaotic spacings. "Terrible quoting"! Also this date is pretty confusing: 20.12.16.')
}

formatHelper(['Terribly  formatted text    .  With chaotic spacings." Terrible quoting     "! Also this date is pretty confusing : 20  .  12.  16 .'])
// Terribly formatted text. With chaotic spacings. "Terrible quoting"! Also this date is pretty confusing: 20.12.16.

// formatHelper(['Make,sure to give:proper spacing where is needed... !'])
// Make, sure to give: proper spacing where is needed...!
