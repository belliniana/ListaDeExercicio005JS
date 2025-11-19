function executar() {
    let soma = 0;

    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    alert("A soma dos números pares de 1 a 200 é: " + soma);
}