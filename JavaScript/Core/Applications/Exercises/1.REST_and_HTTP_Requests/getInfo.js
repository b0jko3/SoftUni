function getInfo() {
    const URL = 'https://judgetests.firebaseio.com/businfo/'
    let stopId = $('#stopId').val()
    // IDs 1287, 1308, 1327 and 2334.

    $.ajax({
        method:'GET',
        url: URL + `${stopId}.json`
    }).then(handleSuccess)
    .catch(handleError)

    // let productName = $('input').first().val()
    // let productPrice = $('input').eq(1).val()
    // let totalPrice = $('tfoot td:last-child').text()
    
    // if(productName !== '' && 
    // productPrice !== '' && 
    // typeof productPrice !== String) {
    //     totalPrice = (+totalPrice + +productPrice).toFixed(2)
    //     $('tfoot td:last-child').text(totalPrice)
    //     $('#product-list').append('<tr>')
    //     $('#product-list tr:last-child').append(`<td>${productName}</td>`)
    //     $('#product-list tr:last-child').append(`<td>${productPrice}</td>`)
    // }
    // productName = $('input').first().val('')
    // productPrice = $('input').eq(1).val('')

    function handleSuccess(res) {
        console.log(res)
    }

    function handleError(err) {
        console.log(err)
    }
}

// {
//     "buses": {
//         "4": 13,
//         "12": 6,
//         "18": 7
//     },
//     "name": "St. Nedelya sq."
// }
