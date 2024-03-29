function codifica(texto) {
    var caracteres = texto.value.split("");
    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "ai";
        } else if(item == "e") {
            caracteres[i] = "enter";
        } else if(item == "i") {
            caracteres[i] = "imes";
        } else if(item == "o") {
            caracteres[i] = "ober";
        } else if(item == "u") {
            caracteres[i] = "ufat";
        }
    });
    return caracteres.join("");
}

document.addEventListener('DOMContentLoaded', function() {
    var resultado = document.getElementById("resultado");
    var inputTexto = document.getElementById("inputTexto");
    var segundoCampo = document.querySelector(".input-texto:not(#inputTexto)");
    var btnCodificar = document.querySelector(".btn-codificar");
    var btnDecodificar = document.querySelector(".btn-decodificar");
    var mensagensErro = document.querySelector(".mensagens-erro");

    inputTexto.addEventListener('input', function() {
        if (inputTexto.value.trim() === '') {
            resultado.value = '';
        }
    });

    function codifica(texto) {
        var caracteres = texto.split("");
        caracteres.forEach(function(item, i) {
            if(item == "a") {
                caracteres[i] = "ai";
            } else if(item == "e") {
                caracteres[i] = "enter";
            } else if(item == "i") {
                caracteres[i] = "imes";
            } else if(item == "o") {
                caracteres[i] = "ober";
            } else if(item == "u") {
                caracteres[i] = "ufat";
            }
        });
        return caracteres.join("");
    }

    function decodifica(texto) {
        var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
        texto = texto;
        for(var i = 0; i < codigo.length; i++) {
            if(texto.includes(codigo[i][1])) {
                texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
            }
        }
        return texto;
    }

    function escreveCodificado() {
        var btnCopiar = document.querySelector(".btn-copiar");
        btnCopiar.classList.remove("invisivel");
        var texto = inputTexto.value;
        var textoCodificado = codifica(texto);
        segundoCampo.value = textoCodificado;
        resultado.value = textoCodificado;
    }

    function escreveDecodificado() {
        var btnCopiar = document.querySelector(".btn-copiar");
        btnCopiar.classList.remove("invisivel");
        var texto = inputTexto.value;
        var textoDecodificado = decodifica(texto);
        segundoCampo.value = textoDecodificado;
        resultado.value = textoDecodificado;
    }

    btnCodificar.onclick = function() {
        var erros = validaTexto(inputTexto);
        if(erros.length > 0) {
            mostraErros(erros);
            resultado.textContent = "";
            return;
        }
        escreveCodificado();
        mensagensErro.innerHTML = "";
    }

    btnDecodificar.onclick = function() {
        var erros = validaTexto(inputTexto);
        if(erros.length > 0) {
            mostraErros(erros);
            resultado.textContent = "";
            return;
        }
        escreveDecodificado();
        mensagensErro.innerHTML = "";
    }
});
