function boxesAndBottles(bottles, capacity) {
    let result = bottles / capacity

    console.log(Math.ceil(result))
}

boxesAndBottles(20, 5) //4
boxesAndBottles(15, 7) //3
boxesAndBottles(5, 10) //1
