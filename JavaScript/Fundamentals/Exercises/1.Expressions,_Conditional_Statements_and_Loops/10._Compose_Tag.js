function composeTag([fileLocation, alternateText]) {
    let result = `<img src="${fileLocation}" alt="${alternateText}">`

    console.log(result)
}

composeTag(['smiley.gif', 'Smiley Face'])
//<img src="smiley.gif" alt="Smiley Face">
