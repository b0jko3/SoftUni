function cone(radius, height) {
    let s = Math.sqrt(radius ** 2 + height ** 2)
    let surfaceArea = Math.PI * radius * s + Math.PI * radius ** 2
    let volume = 1 / 3 * Math.PI * radius ** 2 * height

    console.log(`volume = ${volume}`)
    console.log(`area = ${surfaceArea}`)
}

cone(3, 5)
// volume = 47.1239
// area = 83.2298

cone(3.3, 7.8)
// volume = 88.9511
// area = 122.016
