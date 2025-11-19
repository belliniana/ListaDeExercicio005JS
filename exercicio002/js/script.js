function executar() {
    let pares = "";

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            pares += i + " ";
        }
    }

    alert("Números pares de 1 a 50:\n" + pares);
}