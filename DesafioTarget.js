// 1) Observe o trecho de código abaixo: 
// int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;

for (k = 0; k < indice; k++) {
    soma += k;
}
console.log(soma); // 78

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será 
// a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
// se o número informado pertence ou não a sequência.

//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let numero = parseInt(prompt("Digite um número: "));
let fibonacci = [0, 1];
let i = 2;
let proximo = 0;

while (proximo < numero) {
    proximo = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(proximo);
    i++;
}

if (proximo === numero) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

let faturamento = { "faturamento": [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] };
let menor = Math.min(...faturamento.faturamento);
let maior = Math.max(...faturamento.faturamento);

let somaFaturamento = faturamento.faturamento.reduce((acc, cur) => acc + cur, 0);
let media = somaFaturamento / faturamento.faturamento.length;

let diasAcimaDaMedia = faturamento.faturamento.filter(faturamento => faturamento > media).length;

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${menor}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${maior}`);
console.log(`Número de dias acima no mês que o faturamento diário foi superior a da média: ${diasAcimaDaMedia}`);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado 
// teve dentro do valor total mensal da distribuidora.

IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

let faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalFaturamento = Object.values(faturamentoEstados).reduce((acc, cur) => acc + cur, 0);
let percentualEstados = Object.entries(faturamentoEstados).map(([estado, faturamento]) => {
    return { estado, percentual: ((faturamento / totalFaturamento) * 100).toFixed(2) };
});
console.log(percentualEstados);

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência 
// ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let caracteres = prompt("Digite uma palavra qualquer: ");
let caracteresInvertidos = "";

for (let i = caracteres.length - 1; i >= 0; i--) {
    caracteresInvertidos += caracteres[i];
}
console.log(caracteresInvertidos);
