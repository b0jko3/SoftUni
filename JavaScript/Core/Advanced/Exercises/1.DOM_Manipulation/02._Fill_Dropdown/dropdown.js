function addItem() {
    let newItemText = document.getElementById('newItemText').value
    let newItemValue = document.getElementById('newItemValue').value
    let menu = document.getElementById('menu')
    let opt = document.createElement('option')
    opt.textContent = newItemText
    opt.value = newItemValue
    menu.appendChild(opt)
    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}

// Looks good doesn't work!
// function addItem() {
//     let newItemText = document.getElementById('newItemText').value
//     let newItemValue = document.getElementById('newItemValue').value
//     let menu = document.getElementById('menu')
//     let option = new Option(newItemText, newItemValue)
//     menu.appendChild(option)
//     document.getElementById('newItemText').value = ''
//     document.getElementById('newItemValue').value = ''
// }
