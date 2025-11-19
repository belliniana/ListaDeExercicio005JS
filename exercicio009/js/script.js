function executar() {
    let n = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(n) || n <= 0) {
        alert("Número inválido!");
        return;
    }

    let resultado = "";

    for (let i = 1; i <= n; i++) {
        resultado += i + " ";
    }

    alert("Números de 1 até " + n + ":\n" + resultado);
}