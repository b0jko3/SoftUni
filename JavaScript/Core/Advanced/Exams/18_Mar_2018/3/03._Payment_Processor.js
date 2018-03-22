class PaymentProcessor {
    constructor(){
        this.payment = []
        this.payments = 0
        this.balance = 0
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        }

    }

    registerPayment(id, name, type, value) {
        let validType = false
        for (const key in this.options.types) {
            if (this.options.types[key] === type) {
                validType = true
            }
        }

        if (!typeof id === String ||
        !typeof name === String ||
        !name === '' ||
        !id === '' ||
        !typeof value === Number ||
        !validType
        ) {
            throw new Error
        } else {
            this.payment.push(id, name, type, value)
            this.payments++
        }
        return this
    }

    deletePayment(id) {
        let validId = false
        for (const e of this.payment) {
            if (e === id) {
                validId = true
            }
        }

        if (this.payment[id] === 'undefined' ||
        !validId) {
            throw new Error
        } else {
            let start
            for (let i = 0; i < this.payment.length; i++) {
                if (this.payment[i] === id) {
                    this.payment[i] = undefined
                    this.payment[i + 1] = undefined
                    this.payment[i + 2] = undefined
                    this.payment[i + 3] = undefined
                }
            }
            let name 
            let type 
            let value

            for (let i = start; i < this.payment.length; i += 4) {
                name = this.payment[1 + i]
                type = this.payment[2 + i]
                value = this.payment[3 + i]
                
            }
            this.payments--
        }
        return this
    }

    get(id) {
        let validId = false
        for (const e of this.payment) {
            if (e === id) {
                validId = true
            }
        }

        if(!validId) {
            throw new Error
        } else {
            let start
            for (let i = 0; i < this.payment.length; i++) {
                if (this.payment[i] === id) {
                    start = i
                }
            }
            let name 
            let type 
            let value

            for (let i = start; i < this.payment.length; i += 4) {
                name = this.payment[1 + i]
                type = this.payment[2 + i]
                value = this.payment[3 + i]
                
            }
            return `Details about payment ID: ${id}
- Name: ${name}
- Type: ${type}
- Value: ${value.toFixed(2)}`
        }
    }

    setOptions(options) {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                this.options[key] = options[key]
            }
        }
    }

    toString() {
        if (this.payments !== 0) {
            for (let i = 0; i < this.payment.length; i += 4) {
                if (this.payment[i] !== '' && 
                this.payment[i] !== undefined) {
                    this.balance += this.payment[3 + i]
                }
            }
            return `Summary:
- Payments: ${this.payments}
- Balance: ${this.balance.toFixed(2)}`
        }
    }
}


// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

//console.log(generalPayments.get('01A3'))

// // Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// // Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// generalPayments.get('E027');

// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());

// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());

// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());
