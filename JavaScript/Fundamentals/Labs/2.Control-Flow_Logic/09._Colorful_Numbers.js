function colorfulNumbers(n) {
    let result = '<ul>\n'

    for (let i = 1; i <= n; i++) {
        result += `  <li><span style='color:${color(i)}'>${i}</span></li>\n`
    }

    result += '</ul>\n'

    return result

    function color(number) {
        if (number % 2 === 0) {
            return 'blue'
        } else {
            return 'green'
        }
    }
}

console.log(colorfulNumbers(10))
// <ul>
//   <li><span style='color:green'>1</span></li>
//   <li><span style='color:blue'>2</span></li>
//   <li><span style='color:green'>3</span></li>
//   <li><span style='color:blue'>4</span></li>
//   <li><span style='color:green'>5</span></li>
//   <li><span style='color:blue'>6</span></li>
//   <li><span style='color:green'>7</span></li>
//   <li><span style='color:blue'>8</span></li>
//   <li><span style='color:green'>9</span></li>
//   <li><span style='color:blue'>10</span></li>
// </ul>

console.log(colorfulNumbers(1))
console.log(colorfulNumbers(0))

