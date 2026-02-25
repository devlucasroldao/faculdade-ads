const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")

function somar(){
    if(num1.value === "" || num2.value === ""){
        alert("Por favor, preencha todos os campos!")
        return
    }
    let soma = Number(num1.value) + Number(num2.value)
    resultado.textContent = "Resultado: " + soma
}

function subtrair(){
    if(num1.value === "" || num2.value === ""){
        alert("Por favor, preencha todos os campos!")
        return
    }
    let subtrair = Number(num1.value) - Number(num2.value)
    resultado.textContent = "Resultado: " + subtrair
}

function multiplicar(){
    if(num1.value === "" || num2.value === ""){
        alert("Por favor, preencha todos os campos!")
        return
    }
    let multiplicar = Number(num1.value) * Number(num2.value)
    resultado.textContent = "Resultado: " + multiplicar
}

function dividir(){
    if(num1.value === "" || num2.value === ""){
        alert("Por favor, preencha todos os campos!")
        return
    }
    let dividir = Number(num1.value) / Number(num2.value)
    resultado.textContent = "Resultado: " + dividir
}

function limpar(){
    num1.value = ""
    num2.value = ""
}