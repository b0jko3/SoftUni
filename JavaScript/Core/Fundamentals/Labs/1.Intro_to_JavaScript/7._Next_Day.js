function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 2).toISOString().slice(0, 10)
    let result = date.replace(/(^|-)0+/g, "$1")
    return result
}

console.log(nextDay(2016, 9, 30)) //2016-10-1
