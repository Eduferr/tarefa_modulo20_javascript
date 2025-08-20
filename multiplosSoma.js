/*
Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000
*/

const somarMult = () => {
    let soma = 0, i = 1;

    while (i < 1000) {
        if (i % 5 === 0 || i % 7 === 0) soma += i;
        i++
    }
    return soma
}
console.log(somarMult()); 