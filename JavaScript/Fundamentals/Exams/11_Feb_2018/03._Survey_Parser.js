function surveyParser(data) {
    let svgRegex = /<svg>[\s\S]*<\/svg>/g
    let validRegex = /<svg>[\s\S]*<cat>[\s\]*<\/cat>[\s\S]*<cat>[\s\S]*<\/cat>[\s\S]*<\/svg>/g
    let valueRegex = /<val>([0-9]+)<\/val>([0-9]+)/g
    let labelRegex = /\[[\s\S]+\]/g
    
    if (data.match(svgRegex)) {
        //console.log('match svg')
        if (data.match(validRegex) && data.match(labelRegex) && data.match(valueRegex)) {
            //console.log('match format')
            let m
            let result = 0
            let count = 0
            let label = data.match(labelRegex)
            label = label[0]
            label = label.replace('[', '').replace(']', '')
            label = label.trim()

            while ((m = valueRegex.exec(data)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === valueRegex.lastIndex) {
                    valueRegex.lastIndex++
                }
                
                // The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    if (groupIndex === 1) {
                        a = Number(match)
                    }
                    if (groupIndex === 2) {
                        b = Number(match)
                        count += Number(b)
                        result += a * b
                    }
                })
            }
            result /= count
            //console.log(label)
            console.log(label + ': ' + parseFloat(result.toFixed(2)))
        } else {
            console.log('Invalid format')
        }
    } else {
        console.log('No survey found')
    }
}

surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')
// Food - General: 4.1

// surveyParser("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>")
// No survey found

// surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')
// Invalid format

// surveyParser('<p>Our guests may enjoy a special menu of freshly caught seafood.</p><br><svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat><cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>')
// Food - Special: 7.25
