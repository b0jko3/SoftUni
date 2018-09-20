function attachEvents() {
    console.log('a')
    $('#submit').on('click', function () {
        let a = $('#submit').val()
        console.log(a)
    })
}

attachEvents()

// { name: locationName,
//     code: locationCode }
  
