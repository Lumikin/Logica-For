constNum1 = parseFloat(prompt("Digite o primeiro numero"))
constNum2 = parseFloat(prompt("Digite o segundo numero"))

if(!isNaN(constNum1) && !isNaN(constNum2)) {

    let comeco;
    let termino;
    
    if (constNum1 < constNum2) {
        comeco = constNum1
        termino = constNum2
    }  else {
        comeco = constNum1
        termino = constNum2
    }
let Pares = ""
for (let i = comeco; i <= termino; i++) {
    if (i % 2 === 0) {
        Pares += i + " "
    }
    alert ("numeros pares entre" + comeco + termino)
}
} else{ 
    alert("os numeros são invalidos")
}


