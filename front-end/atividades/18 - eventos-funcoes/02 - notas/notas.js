function validarNotas(campo, min, max) {
  let valor = parseFloat(document.getElementById(campo).value);
  if (isNaN(valor) || valor < min || valor > max) {
    alert(`Erro: o valor de ${campo.toUpperCase()} deve estar entre ${min} e ${max}`);
    document.getElementById(campo).value = '';
  }
}

function calcularNota() {
  let ap1 = parseFloat(document.getElementById("ap1").value);
  let ap2 = parseFloat(document.getElementById("ap2").value);
  let as = parseFloat(document.getElementById("as").value);

  if (isNaN(ap1) || isNaN(ap2) || isNaN(as)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  let nota = ap1 + ap2 + as;
  let resultado = document.getElementById("resultado");

  if (nota >= 6) {
    resultado.textContent = `Nota ${nota.toFixed(1)}. Parabéns! Você está Aprovado!`;
  } else {
    resultado.textContent = `Nota ${nota.toFixed(1)}. Reprovado! Reforce seus estudos para a AF.`;
  }
}