const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante'
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
let teste = 'teste'
readline.question('Informe sua idade:', t => {
    leituraDeCampo = t;
    console.log('o usuario digitou: $(leituraDeCampo)  e nossa variavel de teste e: $(teste)')
});