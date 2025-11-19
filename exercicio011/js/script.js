function executar() {
    let maiores = 0;

    for (let i = 1; i <= 10; i++) {
        let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa:`));

        if (isNaN(idade) || idade < 0) {
            alert("Idade inválida! Digite novamente.");
            i--;
            continue;
        }

        if (idade >= 18) {
            maiores++;
        }
    }

    alert("Quantidade de pessoas maiores de idade: " + maiores);
}