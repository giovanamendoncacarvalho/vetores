let nomes
let idades
let vetornomes = []
let vetoridades = []
let contador = 0
let resultado

do {
    nomes = (prompt(`Insira o ${contador + 1}° nome:`))
    idades = Number (prompt(`Insira a idade dessa pessoa:`))
    vetoridades[contador] = idades
    vetornomes[contador] = nomes
    contador++
} while (contador < 9)


alert("TODOS OS MENORES DE IDADE DA LISTA");

let menores = 0;
let contadormenores = 0;

do {
    if (vetoridades[contadormenores] < 18) {
        alert(`Nome: ${vetornomes[contadormenores]} | Idade: ${vetoridades[contadormenores]} anos`);
        menores = menores + 1;
    }
    contadormenores = contadormenores + 1;
} while (contadormenores < 9);

if (menores == 0) {
    alert("Nenhuma pessoa menor de idade foi cadastrada.");
}


