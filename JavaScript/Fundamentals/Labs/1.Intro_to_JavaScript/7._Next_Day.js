function nextDay(year, month, day) {
    let date = new Date(year, month, day + 1)
    return date
}

nextDay(2016, 9, 30) //2016-10-1
