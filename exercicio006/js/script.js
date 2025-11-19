function executar() {
    let maior = null;
    let menor = null;

    for (let i = 1; i <= 10; i++) {
        let n = parseFloat(prompt(`Digite o ${i}º número:`));

        if (isNaN(n)) {
            alert("Valor inválido! Digite um número.");
            i--; 
            continue; 
        }

        if (maior === null || n > maior) {
            maior = n;
        }

        if (menor === null || n < menor) {
            menor = n;
        }
    }

    alert(`Maior número: ${maior}\nMenor número: ${menor}`);
}