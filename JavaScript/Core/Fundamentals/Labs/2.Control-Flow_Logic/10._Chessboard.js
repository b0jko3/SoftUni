function chessboard(n) {
    let result = '<div class="chessboard">\n'

    for (let i = 1; i <= n; i++) {
        result += '  <div>\n'

        if (i % 2 === 0) {
            for (let j = 1; j <= n; j++) {
                result += `    <span class="${color(j + 1)}"></span>\n`
            }
        } else {
            for (let j = 1; j <= n; j++) {
                result += `    <span class="${color(j)}"></span>\n`
            }
        }
        result += '  </div>\n'
    }

    result += '</div>\n'

    return result

    function color(number) {
        if (number % 2 === 0) {
            return 'white'
        } else {
            return 'black'
        }
    }
}

console.log(chessboard(3))
// <div class="chessboard">
//   <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//   </div>
//   <div>
//     <span class="white"></span>
//     <span class="black"></span>
//     <span class="white"></span>
//   </div>
//   <div>
//     <span class="black"></span>
//     <span class="white"></span>
//     <span class="black"></span>
//   </div>
// </div>
