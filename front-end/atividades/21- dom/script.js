const titulo = document.getElementById("titulo")

titulo.style.color = "blue"
titulo.style.textAlign = "center"
titulo.style.border = "2px solid red"
titulo.style.backgroundColor = "yellow"

titulo.innerText = "DOM - VAMO COLORADOOOO"
titulo.innerHTML = "Manipulando <br> o DOM"



const elementosAzuis = document.getElementsByClassName("fundo-azul")

for (let i = 0; i < elementosAzuis.length; i++){
    elementosAzuis[i].style.color = "red"
}



const itens = document.getElementsByTagName("li")

itens[0].style.fontSize = "30px"

for (let i = 0; i < itens.length; i++){
    itens[i].style.fontStyle = "italic"
    itens[i].style.textDecoration = "underline"
}

const title = document.querySelector("title")
title.textContent = "Manipulando o DOM!!!"

const paragrafo = document.querySelector(".seletor p")
paragrafo.style.color = "green"





const paragrafos = document.querySelectorAll("div p")

for (let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.fontSize = "40px"
    paragrafos[i].style.fontWeight = "bold"
}




function mudarFoto(){
    if(img.src.includes("aula17.webp")){
        img.src = "aula17-2.jpg"
    }else{
        img.src = "aula17-2.jpg"
    }
}




const meuParagrafo = document.createElement("p")
meuParagrafo.textContent = "Criando um paragrafo"

const body = document.querySelector("body")
body.appendChild(meuParagrafo)




meuParagrafo.classList.add("fundo-azul")



const h4 = document.querySelector("h4")
h4.style.cursor = "pointer"

function mudarCor(){
    h4.classList.toggle("verde")
}

h4.addEventListener("click", mudarCor)