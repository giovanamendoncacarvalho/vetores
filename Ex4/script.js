let vetor1 = [];
let vetor2 = [];
let resultado = [];



alert("Preenchimento do Vetor 1");
for (let contador = 0; contador < 5; contador++) {
let valor = Number(prompt("Digite o " + (contador + 1) + "° número do Vetor 1:"));
    vetor1.push(valor);
}


alert("Preenchimento do Vetor 2");
for (let contador = 0; contador < 5; contador++) {
    let valor = Number(prompt("Digite o " + (i + 1) + "° número do Vetor 2:"));
    vetor2.push(valor);
}


for (let contador = 0; contador < vetor1.length; contador++) {
    let elemento = vetor1[i];


    if (vetor2.includes(elemento) && !resultado.includes(elemento)) {
        resultado.push(elemento);
    }
}


alert("Vetor 1: [" + vetor1.join(", ") + "]\n" + "Vetor 2: [" + vetor2.join(", ") + "]\n\n" + "Resultado -> [" + resultado.join(", ") + "]");