function solve([arg1, arg2, arg3]){
    let numberToConvert = Number(arg1)
    let inputUnit = arg2
    let outputUnit = arg3

    let oneMeterToMillimeters = 1000
    let oneMeterToCentimeters = 100
    let oneMeterToMiles = 0.000621371192
    let oneMeterToInches = 39.3700787
    let oneMeterToKilometers = 0.001
    let oneMeterToFeet = 3.2808399
    let oneMeterToYards = 1.0936133

    let result = 0

    if(inputUnit === 'mm'){
        result += numberToConvert / oneMeterToMillimeters
    }else if(inputUnit === 'cm'){
        result += numberToConvert / oneMeterToCentimeters
    }else if(inputUnit === 'mi'){
        result += numberToConvert / oneMeterToMiles
    }else if(inputUnit === 'in'){
        result += numberToConvert / oneMeterToInches
    }else if(inputUnit === 'km'){
        result += numberToConvert / oneMeterToKilometers
    }else if(inputUnit === 'ft'){
        result += numberToConvert / oneMeterToFeet
    }else if(inputUnit === 'yd'){
        result += numberToConvert / oneMeterToYards
    }else {
        result += numberToConvert
    }

    if(outputUnit === 'mm'){
        result *= oneMeterToMillimeters
    }else if(outputUnit === 'cm'){
        result *= oneMeterToCentimeters
    }else if(outputUnit === 'mi'){
        result *= oneMeterToMiles
    }else if(outputUnit === 'in'){
        result *= oneMeterToInches
    }else if(outputUnit === 'km'){
        result *= oneMeterToKilometers
    }else if(outputUnit === 'ft'){
        result *= oneMeterToFeet
    }else if(outputUnit === 'yd'){
        result *= oneMeterToYards
    }

    console.log(result.toFixed(8) + ' ' + outputUnit)
}

solve(['12','km','ft'])
solve(['150','mi','in'])
solve(['450','yd','km'])
