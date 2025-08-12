/* 
Dado um array numérico qualquer sem valores repetidos, 
descubra qual é o índice do maior valor e o índice do menor valor.
*/

const indiceMaiorMenor = (lista) => {

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > lista[indiceMaior]) indiceMaior = i;
        if (lista[i] < lista[indiceMenor]) indiceMenor = i;
    }
    return { indiceMaior, indiceMenor };
}
console.log(indiceMaiorMenor([5, 12, 3, 9, 1]))
