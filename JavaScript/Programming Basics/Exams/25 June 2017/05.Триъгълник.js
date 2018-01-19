function solve(args){
    let n = Number(args[0])
    let width = (4 * n) + 1
    let height = (2 * n) + 1

    console.log('#'.repeat(width))

    for(i=0;i<n;i++){
        console.log('.'.repeat(i + 1) + '#'.repeat(i + 1))
    }

}

solve(['5'])
//solve(['8'])
