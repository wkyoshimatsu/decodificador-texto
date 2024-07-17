function exibirMensagemInicial(){
  document.getElementById("nenhumaMensagemEncontrada").style.display = "flex";
  document.getElementById("resultado").style.display = "none";
}

function criptografar () {
  let textoParaCriptografia = document.getElementById("entrada").value;
  document.getElementById("entrada").value = "";
  
  let textoEmProcessamento = textoParaCriptografia.replaceAll("e", "enter");
  textoEmProcessamento = textoEmProcessamento.replaceAll("i", "imes");
  textoEmProcessamento = textoEmProcessamento.replaceAll("a", "ai");
  textoEmProcessamento = textoEmProcessamento.replaceAll("o", "ober");
  let textoCriptografado = textoEmProcessamento.replaceAll("u", "ufat");

  document.getElementById("nenhumaMensagemEncontrada").style.display = "none";
  document.getElementById("resultado").style.display = "flex";

  let campo = document.getElementById("resultado__conteudo");
  campo.innerHTML = textoCriptografado;
}

function descriptografar () {
  let textoParaDescriptografar = document.getElementById("entrada").value;
  let textoEmProcessamento = textoParaDescriptografar.replaceAll("enter", "e");
  textoEmProcessamento = textoEmProcessamento.replaceAll("imes", "i");
  textoEmProcessamento = textoEmProcessamento.replaceAll("ai", "a");
  textoEmProcessamento = textoEmProcessamento.replaceAll("ober", "o");
  let textoDescriptografado = textoEmProcessamento.replaceAll("ufat", "u");

  document.getElementById("nenhumaMensagemEncontrada").style.display = "none";
  document.getElementById("resultado").style.display = "flex";

  let campo = document.getElementById("resultado__conteudo");
  campo.innerHTML = textoDescriptografado;
}

function copiar() {
  let textoParaCopiar = document.getElementById("resultado__conteudo").innerHTML;
  
  let campo = document.getElementById("entrada");
  campo.value = textoParaCopiar;
}

exibirMensagemInicial();
  
  