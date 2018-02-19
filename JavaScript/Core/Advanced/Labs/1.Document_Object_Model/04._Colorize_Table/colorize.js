function colorize() {
    let tableRow = document.getElementsByTagName('tr')
    console.log(tableRow)
    for (let i = 1; i < tableRow.length; i += 2) {
        tableRow[i].style.backgroundColor = 'teal'
    }
}