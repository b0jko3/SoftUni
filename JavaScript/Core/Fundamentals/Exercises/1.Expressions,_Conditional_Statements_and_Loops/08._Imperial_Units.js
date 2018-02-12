function imperialUnits(inches) {
    let feet = Math.floor(inches / 12)
    inches = inches % 12

    console.log(`${feet}'-${inches}"`)
}

imperialUnits(36) //3'-0"
imperialUnits(55) //4'-7"
imperialUnits(11) //0'-11"
