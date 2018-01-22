function insideVolume(numbers) {
    numbers = numbers.map(Number)
    for (let i = 0; i < numbers.length; i += 3) {
        let x = numbers[i]
        let y = numbers[i + 1]
        let z = numbers[i + 2]
        
        if ((x >= 10 && x <= 50) &&
            (y >= 20 && y <= 80) &&
            (z >= 15 && z <= 50)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
    }
}

insideVolume([8, 20, 22])
//outside

insideVolume([
    13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43])
//inside
//inside
//outside

