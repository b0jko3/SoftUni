function solve([arg1]){
    let password = arg1
    let secretPassword = 's3cr3t!P@ssw0rd'

    if(password === secretPassword){
        console.log('Welcome')
    }else{
        console.log('Wrong password!')
    }
}

solve(['qwerty'])
solve(['s3cr3t!P@ssw0rd'])
solve(['s3cr3t!p@ss'])
