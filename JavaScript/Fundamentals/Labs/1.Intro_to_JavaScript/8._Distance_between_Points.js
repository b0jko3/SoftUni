function distanceBetweenPoints(x1, y1, x2, y2) {
    let distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
    console.log(distance)
}

distanceBetweenPoints(2, 4, 5, 0) //5
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985) //24.50778901186315
