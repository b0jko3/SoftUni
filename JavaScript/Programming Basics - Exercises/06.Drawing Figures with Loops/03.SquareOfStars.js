function solve([arg1]){
    let stars = Number(arg1)

    for(let row = 1; row <= stars; row++){
        console.log("* ".repeat(stars))
    }
}

solve(['4'])
