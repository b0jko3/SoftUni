function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    let personA = {name:firstName, age:firstAge}
    let personB = {name:secondName, age:secondAge}

    if (personA.age >= minAge) {
        console.log(personA)
    }
    if (personB.age >= minAge) {
        console.log(personB)
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9)
//12, 'Ivan', 15, 'Asen', 9	{ name: 'Ivan', age: 15 }
