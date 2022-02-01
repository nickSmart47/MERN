//https://www.rapidtables.com/convert/number/decimal-to-binary.html

function dec2binary(num) {
    let result = '';
    let quotient = Math.floor(num / 2);
    let remainder = num % 2;

    while (quotient > 0) {
        if (remainder == 1) {
            result += 1
        }
        else {
            result += 0
        }
        remainder = quotient % 2;
        quotient = Math.floor(quotient / 2);
    }
    if (remainder == 1) {
        result += 1
    }
    else {
        result += 0
    }
    return result.split('').reverse().join('');
}


console.log(dec2binary(15)) //"1111"
console.log(dec2binary(25)) //"11001"
console.log(dec2binary(28)) //"11100"
console.log(dec2binary(32)) //"100000"
console.log(dec2binary(42)) //"101010"



