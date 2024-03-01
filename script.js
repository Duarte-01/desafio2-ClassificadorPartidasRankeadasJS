function calcularVitorias(vitorias, derrotas) {
    let valorDeVitorias = (vitorias - derrotas)
    return valorDeVitorias
}

function calcularNivel(ranking) {
    let nivel;

    while (ranking < 10) {
        nivel = "Ferro"
        return "O Herói tem saldo de " + ranking + " e está no nível de " + nivel
    } if (ranking >= 11 && ranking <= 20) {
        nivel = "Bronze"
    } else if (ranking >= 21 && ranking <= 50) {
        nivel = "Prata"
    } else if (ranking >= 51 && ranking <= 80) {
        nivel = "Ouro"
    } else if (ranking >= 81 && ranking <= 90) {
        nivel = "Diamante"
    } else if (ranking >= 91 && ranking <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return "O Herói tem saldo de " + ranking + " e está no nível de " + nivel
}

let numVitorias = calcularVitorias(150, 97)
console.log(calcularNivel(numVitorias))

