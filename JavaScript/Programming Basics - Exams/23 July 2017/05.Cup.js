function solve(arg1){
    let n = Number(arg1)
    let width = 5 * n

    for(i = 0; i < n / 2; i++){
        console.log('.'.repeat(n + i) + '#'.repeat(n * 3 - i * 2) + '.'.repeat(n + i))
    }
    for(i = 0; i < n / 2 + 1; i++){
        console.log('.'.repeat(n + n / 2 + i) + '#' + '.'.repeat(n * 2 - 2 - i * 2) + '#' + '.'.repeat(n + n / 2 + i))
    }
    console.log('.'.repeat(n * 2) + '#'.repeat(n) + '.'.repeat(n * 2))
    for(i = 0; i < n / 2; i++){
        console.log('.'.repeat(n * 2 - 2) + '#'.repeat(n + 4) + '.'.repeat(n * 2 - 2))
    }
    console.log('.'.repeat(width / 2 - 5) + 'D^A^N^C^E^' + '.'.repeat(width / 2 - 5))
    for(i = 0; i < n / 2 + 1; i++){
        console.log('.'.repeat(n * 2 - 2) + '#'.repeat(n + 4) + '.'.repeat(n * 2 - 2))
    }
}

solve(['8'])
