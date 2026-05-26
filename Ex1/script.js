let pessoas = []

let contador = 0;
do {
    pessoas[contador] = (prompt(`Insira o ${contador + 1}° nome:`));
    contador++
} while (contador <= 6)

pessoas.reverse()

alert (`Nomes das pessoas de lista em ordem inversa: ${pessoas}`)