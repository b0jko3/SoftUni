function lastMonth(day, month, year) {
    return getDaysInMonth(month, year)
    function getDaysInMonth(m, y) {
        return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
    }
}

console.log(lastMonth([17, 3, 2002])) //28
lastMonth([13, 12, 2004]) //30
