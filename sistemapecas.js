let listaPecas = 30;
let peso = 90;
let nomePeca = "Cilindro Mestre";

if (peso >= 100 ) {
    console.log("Peça tem peso suficiente para cadastrar");

    if (listaPecas >= 10) {
        console.log("A lista está cheia, não tem capacidade suficiente para cadastrar");
    }

    if(nomePeca.length < 3) {
        console.log("Nome muito curto!!");
    }
} else {
    console.log("Peça não será cadastrada");
}
if (peso >= 100 ) {
    console.log("Peça tem peso suficiente para cadastrar");
} 

if (listaPecas >= 10) {
    console.log("A lista está cheia, não tem capacidade suficiente para cadastrar");
}

if(nomePeca.length < 3) {
    console.log("Nome muito curto!!");
}

console.log("Fim do programa");