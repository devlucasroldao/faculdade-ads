// ---------- Alternar tema ----------
var btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// ---------- Contador de interações ----------
var valorContador = document.getElementById("valor-contador");
var inputPasso = document.getElementById("passo");
var btnIncrementar = document.getElementById("btn-incrementar");
var btnDecrementar = document.getElementById("btn-decrementar");

var contador = 0;

function obterPasso() {
  var passo = parseInt(inputPasso.value);

  // Regra: se o campo estiver vazio ou for inválido, o passo padrão é 1
  if (isNaN(passo) || passo <= 0) {
    passo = 1;
  }

  return passo;
}

btnIncrementar.addEventListener("click", function () {
  contador = contador + obterPasso();
  valorContador.textContent = contador;
});

btnDecrementar.addEventListener("click", function () {
  contador = contador - obterPasso();
  valorContador.textContent = contador;
});

// ---------- Galeria dinâmica ----------
var imagens = [
  "imagens/foto1.png",
  "imagens/foto2.png",
  "imagens/foto3.png",
  "imagens/foto4.png",
  "imagens/foto5.png",
  "imagens/foto6.png",
  "imagens/foto7.png"
];

var imagemDestaque = document.getElementById("imagem-destaque");
var containerMiniaturas = document.getElementById("miniaturas");

function renderizarMiniaturas() {
  for (var i = 0; i < imagens.length; i++) {
    var miniatura = document.createElement("img");
    miniatura.src = imagens[i];
    miniatura.alt = "Miniatura " + (i + 1);
    miniatura.dataset.indice = i;

    if (i === 0) {
      miniatura.classList.add("selecionada");
    }

    miniatura.addEventListener("click", function () {
      // remove a seleção da miniatura anterior
      var todasMiniaturas = containerMiniaturas.querySelectorAll("img");
      for (var j = 0; j < todasMiniaturas.length; j++) {
        todasMiniaturas[j].classList.remove("selecionada");
      }

      // marca a miniatura clicada como selecionada
      this.classList.add("selecionada");

      // atualiza a imagem em destaque
      imagemDestaque.src = this.src;
    });

    containerMiniaturas.appendChild(miniatura);
  }
}

function iniciarGaleria() {
  imagemDestaque.src = imagens[0];
  renderizarMiniaturas();
}

iniciarGaleria();
