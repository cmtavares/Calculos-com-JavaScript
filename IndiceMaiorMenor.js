function encontrarIndicesMaiorMenor(array) {
    if (array.length === 0) {
        return null;
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

const numeros = [1, 2, 3, 4, 5];

const indices = encontrarIndicesMaiorMenor(numeros);

console.log(`O índice do maior valor é: ${indices.indiceMaior}`);
console.log(`O índice do menor valor é: ${indices.indiceMenor}`);

module.exports = encontrarIndicesMaiorMenor;