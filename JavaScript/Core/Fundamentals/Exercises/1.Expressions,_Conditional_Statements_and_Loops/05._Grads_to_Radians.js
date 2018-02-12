function gradsToRadians(grads) {
    grads %= 400
    let degrees = grads * 0.9
    if (degrees < 0) {
        degrees += 360
    }
    console.log(degrees)
}

gradsToRadians(100)
gradsToRadians(400)
gradsToRadians(850)
gradsToRadians(-50)
