function criptografar () {
  let textoBase = document.querySelector("textarea").value;
  let textoEmProcessamento = textoBase.replaceAll("e", "enter");
  textoEmProcessamento = textoEmProcessamento.replaceAll("i", "imes");
  textoEmProcessamento = textoEmProcessamento.replaceAll("a", "ai");
  textoEmProcessamento = textoEmProcessamento.replaceAll("o", "ober");
  let textoCriptografado = textoEmProcessamento.replaceAll("u", "ufat");
  console.log(textoCriptografado);
}
  
  