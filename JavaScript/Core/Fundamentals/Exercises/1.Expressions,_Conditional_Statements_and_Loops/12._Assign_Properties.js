function assignProperties(data) {
    let obj = { [data[0]]: data[1], [data[2]]: data[3], [data[4]]: data[5] }
    console.log(obj)
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])
// { name: 'Pesho', age: '23', gender: 'male' }
  