function criptografar () {
  let textoBase = document.querySelector("textarea").value;
  let textoEmProcessamento = textoBase.replaceAll("e", "enter");
  textoEmProcessamento = textoEmProcessamento.replaceAll("i", "imes");
  textoEmProcessamento = textoEmProcessamento.replaceAll("a", "ai");
  textoEmProcessamento = textoEmProcessamento.replaceAll("o", "ober");
  let textoCriptografado = textoEmProcessamento.replaceAll("u", "ufat");

  console.log(textoCriptografado);

  document.getElementById("apresentacao__saida__nenhumaMensagemEncontrada").setAttribute("hidden", true);
  document.getElementById("apresentacao__saida__nenhumaMensagemEncontrada__imagem").setAttribute("hidden", true);
  document.getElementById("apresentacao__saida__nenhumaMensagemEncontrada__conteudo").setAttribute("hidden", true);
  document.getElementById("apresentacao__saida__nenhumaMensagemEncontrada__conteudo__titulo").setAttribute("hidden", true);
  document.getElementById("apresentacao__saida__nenhumaMensagemEncontrada__conteudo__descricao").setAttribute("hidden", true);


  //document.getElementsById("apresentacao__saida__criptografado").setAttribute("hidden", false);
  
  // let campo = document.getElementById("apresentacao__saida__Criptografado__conteudo");
  // campo.innerHTML = textoCriptografado;

}
  
  