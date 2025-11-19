function executar() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let n = parseFloat(prompt(`Digite o ${i}º número:`));

        if (isNaN(n)) {
            alert("Valor inválido! Digite novamente.");
            i--;
            continue;
        }

        soma += n;
    }

    let media = soma / 5;
    alert("A média é: " + media);
}