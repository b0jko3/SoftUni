function solve([arg1]){
    let dollars = Number(arg1)

    for(let row = 1; row <= dollars; row++){
        console.log("$ ".repeat(row))
    }
}

solve(['4'])
