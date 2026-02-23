
function dizerOla() {
    alert('Olá!')
}
// dizerOla();
//----------------------------


function olaNome(nome) {
    if (nome != undefined) {
        alert('Olá ' + nome + '!')
    }
}
// olaNome(' ')
//----------------------------------


function somar(num1, num2) {
    return num1 + num2
}
let soma = somar(1, 5);
//alert(`A soma dos números é: ${soma}`);

//------------------------------------

function salvar() {
    const nome = document.getElementById("nome").value
    if (nome == "") {
        alert('O campo vazio é obrigatorio!')
        document.getElementById("nome").focus()
        return
    }
    alert(`Parabéns ${nome}! Cadastro realizado com sucesso!`)
    document.getElementById("nome").value = ""
}

//----------------------------------------


const mouse = document.getElementById("mouse")
function mouseCima() {
    mouse.textContent = "Mouse está aqui!"
    mouse.style.color = "blue"
}

function mouseFora() {
    mouse.textContent = "Mouse saiu!"
    mouse.style.color = "red"
}

//--------------------------------

function textoMudou() {
    alert("O campo nome foi alterado!")
}

//-----------------------------------

const foco = document.getElementById("foco")

function emFoco() {
    foco.style.backgroundColor = "yellow"
    foco.style.fontSize = "18px"
}

function perdeuFoco() {
    foco.style.backgroundColor = "white"
    foco.style.fontSize = "16px"
}

//---------------------------------------

function verificarEnter(event) {
    event = event || window.event;
    if (event.keyCode === 13) {
        alert("Tecla Enter Pressionada!");
    }
}

//----------------------------------------