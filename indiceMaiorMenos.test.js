const { indiceMaiorMenor } = require('./indiceMaiorMenos')

describe('Funcionalidade buscar Índice', () => {
    it('Buscar os índices de maior e menor valor', () => {
        expect(indiceMaiorMenor([5, 12, 3, 9, 1])).toEqual({ indiceMaior: 1, indiceMenor: 4 })
    });
});