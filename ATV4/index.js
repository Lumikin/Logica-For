let notas = 0
let soma = 0

for (let i = 1; i <= 5; i++) {
    notas = parseFloat(prompt("Digite as notas do aluno " + i ));
    if (!isNaN(notas) && notas >= 0 && notas <= 10) {
        soma += notas
    }
    else {
        alert("sua nota é invalida")
    }
} let media = soma/5;
alert("A media é:" + media);