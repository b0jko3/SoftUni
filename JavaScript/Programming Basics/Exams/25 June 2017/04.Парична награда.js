function solve(args){
    let numberOfProjects = Number(args[0])
    let moneyForOnePoint = Number(args[1])
    let points = 0
    let sum = 0

    for(i = 2; i < args.length; i++){
        if(i % 2 != 0){
            points += Number(args[i]) * 2
        }else{
            points += Number(args[i])
        }
    }
    sum = moneyForOnePoint * points

    console.log(`The project prize was ${sum.toFixed(2)} lv.`)
}

solve(['7','100.5','2','4','5','1','1','7','3'])
