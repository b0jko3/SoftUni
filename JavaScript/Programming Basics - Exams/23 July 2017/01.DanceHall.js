function solve([arg1,arg2,arg3]){
    let L = Number(arg1)
    let W = Number(arg2)
    let A = Number(arg3)

    let roomArea = (L*100)*(W*100)
    let bench = roomArea/10
    let wardrobe = (A*100)*(A*100)
    let freeSpace = roomArea - wardrobe - bench
    let result = 0

    result = freeSpace/(40+7000)

    console.log(Math.floor(result))
}

solve(['50','25','2'])
