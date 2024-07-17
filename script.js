let chave_criptografia = [
  {chave: "e", valor: "enter"},
  {chave: "i", valor: "imes"},
  {chave: "a", valor: "ai"},
  {chave: "o", valor: "ober"},
  {chave: "u", valor: "ufat"},
]

let chave_descriptografia = []
for (let i in chave_criptografia){
  let j = {
    chave: chave_criptografia[i].valor,
    valor: chave_criptografia[i].chave
  }
  chave_descriptografia.push(j);
}

let padrao_caracteres = /[^a-z]/gm;

function exibirMensagemInicial(){
  document.getElementById("nenhumaMensagemEncontrada").style.display = "flex";
  document.getElementById("resultado").style.display = "none";

  console.log(chave_criptografia);
  console.log(chave_descriptografia);
}

function criptografar (tipo) {
  let entrada = document.getElementById("entrada").value;
  if (entrada == null || entrada == ""){
    exibirMensagemInicial();
    alert("Nenhuma mensagem encontrada\nDigite um texto que você deseja criptografar ou descriptografar.");
  } else if (padrao_caracteres.test(entrada)){
    exibirMensagemInicial();
    alert("Apenas letras minúsculas e sem acento.");
  } else {
    let textoEmProcessamento = document.getElementById("entrada").value;
  
    let chave;
    if (tipo == 1){
      chave = chave_criptografia;
    } else {
      chave = chave_descriptografia;
    }
    
    for (let i in chave) {
      textoEmProcessamento = textoEmProcessamento.replaceAll(chave[i].chave, chave[i].valor)
    }
    
    document.getElementById("nenhumaMensagemEncontrada").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
  
    let campo = document.getElementById("resultado__conteudo");
    campo.innerHTML = textoEmProcessamento;
  }
  document.getElementById("entrada").value = "";
}

function copiar() {
  let textoParaCopiar = document.getElementById("resultado__conteudo").innerHTML;
  
  let campo = document.getElementById("entrada");
  campo.value = textoParaCopiar;
}

exibirMensagemInicial();
  
  