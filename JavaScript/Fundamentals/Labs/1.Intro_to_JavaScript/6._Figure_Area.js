function figureArea(w1, h1, w2, h2) {
    let smallW = Math.min(w1, w2)
    let smallH = Math.min(h1, h2)
    let area = w1 * h1 + w2 * h2 - smallW * smallH

    return area
}

console.log(figureArea(2, 4, 5, 3))
