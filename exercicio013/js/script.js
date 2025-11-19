function executar() {
    let n = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(n) || n < 0) {
        alert("Número inválido!");
        return;
    }

    let soma = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            soma += i;
        }
    }

    alert("A soma dos múltiplos de 3 até " + n + " é: " + soma);
}