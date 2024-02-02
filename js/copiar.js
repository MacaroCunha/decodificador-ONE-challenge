document.addEventListener('DOMContentLoaded', function () {
  var btnCopiar = document.querySelector(".btn-copiar");

  btnCopiar.onclick = function () {
    var resultado = document.getElementById("resultado");

    resultado.select();
    document.execCommand("copy");
    inputTexto.value = "";
    inputTexto.focus();
    resultado.textContent = "";
    btnCopiar.classList.add("invisivel");
  }
});