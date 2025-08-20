/*
Calcule o MDC (máximo divisor comum) entre dois números
*/
function mdc(a, b) {

    while (b !== 0) {
        let modulo = a % b 
        a = b 
        b = modulo 
    }
    return a
}

console.log (mdc(21,15))