function executar() {
    const numero = parseInt(prompt("Digite um número inteiro para ver a tabuada:"));
    let tabuada = "";

    if (isNaN(numero)) {
        alert("Digite um número válido!");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert("Tabuada de " + numero + ":\n\n" + tabuada);
}