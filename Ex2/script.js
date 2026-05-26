let vetor = []
let soma = 0
let media
let contador = 0
let numeros
let resultado = 0

do {
    numeros = Number (prompt(`Insira o ${contador + 1}° número:`))
    vetor[contador] = numeros
    contador++
    soma = soma + numeros
} while (contador < 8)


media = soma / 8

alert (`A média dos números é: ${media}`)

do {
    if (vetor[resultado] > media) {
alert(`Os números da lista que estão acima da média são: ${vetor[resultado]}`);
}
resultado = resultado + 1;
} while (resultado < 8);

