function addAndRemoveElements(command) {
    let result = []
    let count = 1
    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'add':
                result.push(count++) 
                break
            case 'remove':
                count++
                result.pop()
                break
        }
    }
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    } else {
        console.log('Empty')
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add'])
// 1
// 2
// 3
// 4

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
// 1
// 4
// 5

addAndRemoveElements(['remove', 'remove', 'remove'])
// Empty
