function executar() {
    let n = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(n) || n < 0) {
        alert("Valor inválido!");
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }

    alert("O fatorial de " + n + " é: " + fatorial);
}