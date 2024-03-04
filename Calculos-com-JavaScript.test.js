const encontrarIndicesMaiorMenor = require('./IndiceMaiorMenor')
const calcularMDC = require('./mdc')
const somaMultiplos5ou7AbaixoDe1000 = require('./Multiplo5ou7')

describe('EncontrarIndiceMaiorMenor', () => {
    test('Deve retornar null para array vazio', () => {
        expect(encontrarIndicesMaiorMenor([])).toBeNull();
    });

    test('Deve retornar indices do maior e menor valor', () => {
        const numeros = [1, 2, 3, 4, 5];
        const indices = encontrarIndicesMaiorMenor(numeros);
        expect(indices).toEqual({ indiceMaior: 4, indiceMenor: 0 });
    });
});

describe('CalcularMDC', () => {
    test('Deve calcular o MDC corretamente', () => {
        const resultado = calcularMDC(8,15);
        expect(resultado).toBe(1)
    });
});

describe('Múltiplo de 5 ou 7', () => {
    test('Deve calcular a soma corretamente', () => {
        const  resultado = somaMultiplos5ou7AbaixoDe1000();
        expect(resultado).toBe(156361)
    });
});