const URL = 'https://phonebook-540ec.firebaseio.com/phonebook'

$('#btnLoad').on('click', loadData)

function loadData() {
    $.ajax({
        method:'GET',
        url: URL + '.json'
    }).then(handleSuccess)
        .catch(handleError)

    function handleSuccess(res) {
        console.log(res)
    }

}

function handleError(err) {
    console.log(err)
}