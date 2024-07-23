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

let padrao_caracteres = /[^a-z|^\s|^\n|^..|^.,]/gm;

function convertRemToPixels(rem) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function alterarAlturaCampo () {
  let entrada = document.getElementById("apresentacao__entrada__texto");
  let alturaCampo = entrada.offsetHeight - (convertRemToPixels(4));
  let numeroLinhas = Math.floor(alturaCampo / convertRemToPixels(2)) - 1;
  
  if (numeroLinhas < 3){
    numeroLinhas = 3;
  }
  
  let linhas = numeroLinhas.toString();
  let elementoEntrada = document.getElementById("entrada");
  elementoEntrada.setAttribute("rows", linhas);
}

function alterarAlturaTela(){
  let apresentacao = document.querySelector("body");
  let alturaApresentacao = apresentacao.offsetHeight;
  let alturaTela = document.documentElement.clientHeight;
  
  if (alturaApresentacao < alturaTela){
    apresentacao.style.height = (alturaTela + "px");
  } else {
    apresentacao.style.removeProperty("height");
  }
  alterarAlturaCampo();
}

function exibirMensagemInicial(){
  document.getElementById("nenhumaMensagemEncontrada").style.display = "flex";
  document.getElementById("resultado").style.display = "none";
  alterarAlturaTela();
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
    let textoEmProcessamento = entrada;
  
    let chave = chave_criptografia;
    if (tipo == 1){
      chave = chave_criptografia;
    } else {
      chave = chave_descriptografia;
    }
    
    for (let i in chave) {
      textoEmProcessamento = textoEmProcessamento.replaceAll(chave[i].chave, chave[i].valor)
    }
    
    // TODO: quebrar texto quando a largura é pequena

    document.getElementById("nenhumaMensagemEncontrada").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    
    let resultado = document.getElementById("resultado__conteudo");
    resultado.innerHTML = textoEmProcessamento;
  }
  document.getElementById("entrada").value = "";
  alterarAlturaTela();
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

function copiar() {
  let textoParaCopiar = document.getElementById("resultado__conteudo").innerHTML;
  
  writeClipboardText(textoParaCopiar);

  let campo = document.getElementById("entrada");
  campo.value = textoParaCopiar;
  alterarAlturaTela();
}

exibirMensagemInicial();
  
  