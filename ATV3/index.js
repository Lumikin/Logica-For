const num = parseInt(prompt("Digite um numeropara multiplicação de 1 ao 10"))

if (!isNaN(num)) {
    let numeros ; 

    for (let i = 1; i <= 10; i++) {
        numeros += `${num} x ${i} = ${(num * i)} ;`
    }
    
    alert("A tabuada do "+ num + ":" + numeros)

} else {
    alert("O numero é invalido")
}