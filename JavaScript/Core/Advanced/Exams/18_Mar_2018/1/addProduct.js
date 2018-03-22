function addProduct() {
    let productName = $('input').first().val()
    let productPrice = $('input').eq(1).val()
    let totalPrice = $('tfoot td:last-child').text()
    
    if(productName !== '' && 
    productPrice !== '' && 
    typeof productPrice !== String) {
        totalPrice = (+totalPrice + +productPrice).toFixed(2)
        $('tfoot td:last-child').text(totalPrice)
        $('#product-list').append('<tr>')
        $('#product-list tr:last-child').append(`<td>${productName}</td>`)
        $('#product-list tr:last-child').append(`<td>${productPrice}</td>`)
    }
    productName = $('input').first().val('')
    productPrice = $('input').eq(1).val('')
}
