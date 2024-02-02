document.addEventListener('DOMContentLoaded', function () {
  var btnCopiar = document.querySelector(".btn-copiar");
  var resultado = document.getElementById("resultado");

  btnCopiar.onclick = function () {
    resultado.select();
    document.execCommand("copy");
    resultado.textContent = "";
    btnCopiar.classList.add("invisivel");
  }
});