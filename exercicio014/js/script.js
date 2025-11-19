function executar() {
    let nomes = [];

    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o ${i}º nome:`);

        if (!nome) {
            alert("Nome inválido, tente novamente!");
            i--;
            continue;
        }

        nomes.push(nome);
    }

    let invertido = nomes.reverse().join("\n");

    alert("Nomes em ordem invertida:\n\n" + invertido);
}