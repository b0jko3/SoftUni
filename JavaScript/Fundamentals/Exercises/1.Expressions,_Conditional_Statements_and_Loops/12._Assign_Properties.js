function assignProperties(propertyAndValue) {
    let result = '{ '
    for (let i = 0; i < propertyAndValue.length; i += 2) {
        result += `${propertyAndValue[i]}: '${propertyAndValue[i + 1]}'`
        if (i < propertyAndValue.length) {
            result += ', '
        }
    }
    result += ' }'
    console.log(result)
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])
// { name: 'Pesho', age: '23', gender: 'male' }
  