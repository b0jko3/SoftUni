function solve([arg1,arg2,arg3]){
    let juniorsCount = Number(arg1)
    let seniorsCount = Number(arg2)
    let trackType = arg3

    let tax = 0
    let discountForCC = 0.25
    let expenses = 0.05

    if (trackType === 'trail'){
        tax += juniorsCount * 5.5 + seniorsCount * 7
    }else if (trackType === 'cross-country'){        
        if((juniorsCount + seniorsCount) >= 50){
            tax += juniorsCount * 8 + seniorsCount * 9.5
            tax -= discountForCC * tax
        }else{
            tax += juniorsCount * 8 + seniorsCount * 9.5
        }
    }else if (trackType === 'downhill'){
        tax += juniorsCount * 12.25 + seniorsCount * 13.75
    }else if (trackType === 'road'){
        tax += juniorsCount * 20 + seniorsCount * 21.5
    }
    tax -= expenses * tax

    console.log(tax.toFixed(2))
}

solve(['10','20','trail'])
