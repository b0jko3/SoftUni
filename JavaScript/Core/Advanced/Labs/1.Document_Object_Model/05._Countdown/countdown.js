function countdown(seconds) {
    let minutes = seconds / 60
    seconds /= minutes
    seconds--
    minutes--
    let time = document.getElementById('time')
    setInterval(function(){
        if (seconds < 10) {
            time.value = (minutes + ':0' + seconds)
        } else {
            time.value = (minutes + ':' + seconds)
        }
        if (seconds <= 0) {
            minutes--
            seconds += 59
        }
        seconds--
    }, 1000)
}