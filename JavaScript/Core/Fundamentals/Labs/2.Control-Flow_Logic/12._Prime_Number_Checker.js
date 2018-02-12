function primeNumberChecker(number) {
    if (number <= 1) {
        return false
    } else {
        for (i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i === 0) {
                return false
            }
        }
        return true
    }
}

console.log(primeNumberChecker(7)) //true
console.log(primeNumberChecker(8)) //false
console.log(primeNumberChecker(81)) //false
console.log(primeNumberChecker(-5)) //false
