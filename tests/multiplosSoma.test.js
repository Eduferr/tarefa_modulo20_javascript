const somarMult = require('../source/multiplosSoma')

describe('Funcionalidade múltiplos', () => {
    it('Deve retornar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000 ', () => {
        expect(somarMult()).toBe(156361)
    });
});