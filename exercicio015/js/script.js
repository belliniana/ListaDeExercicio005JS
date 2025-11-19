function executar() {
    let n = parseInt(prompt("Digite o tamanho da base do triângulo:"));

    if (isNaN(n) || n <= 0) {
        alert("Número inválido!");
        return;
    }

    let desenho = "";

    for (let i = 1; i <= n; i++) {
        desenho += "*".repeat(i) + "\n";
    }

    alert(desenho);
}