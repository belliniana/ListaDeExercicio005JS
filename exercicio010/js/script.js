function executar() {
    let resultado = "";

    for (let i = 100; i <= 200; i++) {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
    }

    alert("Ímpares entre 100 e 200:\n" + resultado);
}