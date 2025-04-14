let soma = 0;
const num = parseInt(prompt("Digite um número:"));

if (isNaN(num) || num < 1) {
    alert("Número inválido.");
} else {
    let numeros = "";
    for (let x = 1; x <= num; x++) {
        numeros += x + " "; // Adiciona o número atual à string
    }
    alert(`Os números são: ${numeros}`); // Exibe todos os números de uma vez
}

