const { mdc } = require("./calculoMdc")

//import mdc from "./calculeMdc"

describe('Funcionalidade Máximo Divisor comum', () => {
    it('Deve verificar se o MDC está correto', () => {
        expect(mdc(21, 15)).toEqual(3)

    });
});
