function calculateSumAndVAT(args) {
    let sum = 0
    let vat = 0.2
    let total = 0

    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(`sum = ${sum}`);
    vat *= sum
    console.log(`VAT = ${vat}`);
    total = sum + vat
    console.log(`total = ${total}`);
}

calculateSumAndVAT([1.20, 2.60, 3.50])
