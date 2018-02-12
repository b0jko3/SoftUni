function distanceOverTime([speedOne, speedTwo, seconds]) {
    let distanceOne = speedOne / 3.6 * seconds
    let distanceTwo = speedTwo / 3.6 * seconds

    console.log(Math.abs(distanceOne - distanceTwo))
}

distanceOverTime([0, 60, 3600])
distanceOverTime([11, 10, 120])
distanceOverTime([5, -5, 40])
