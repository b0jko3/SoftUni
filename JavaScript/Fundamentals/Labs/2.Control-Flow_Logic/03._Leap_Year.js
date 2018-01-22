function leapYear(year) {
    let result = 'no'

    if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
        result = 'yes'
    }
    console.log(result)
}

leapYear(1999) //no
leapYear(2000) //yes
leapYear(1900) //no
