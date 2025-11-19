function executar() {
    let n1 = 0;
    let n2 = 1;
    let sequencia = "0, 1";

    for (let i = 3; i <= 10; i++) {
        let n3 = n1 + n2;
        sequencia += ", " + n3;
        n1 = n2;
        n2 = n3;
    }

    alert("Fibonacci (10 termos):\n" + sequencia);
}