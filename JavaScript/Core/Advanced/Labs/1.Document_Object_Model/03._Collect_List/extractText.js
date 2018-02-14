function extractText() {
    let items = document.getElementsByTagName('li')
    let result = document.getElementById('result')
    for (const item of items) {
        result.value += item.textContent + '\n'
    }
}