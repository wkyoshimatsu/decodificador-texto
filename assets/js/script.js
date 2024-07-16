document.addEventListener('DOMContentLoaded', function() {
    console.log('Documento carregado!');
    
    // Incluir conteúdos iniciais dinamicamente
    fetch('/components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('cabecalho').innerHTML = data;
      });

    fetch('/components/entrada.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('entrada').innerHTML = data;
      });

    fetch('/components/saida.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('saida').innerHTML = data;
      });

    fetch('/components/saidaCriptografada.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('saida__conteudo').innerHTML = data;
      });
  
    fetch('/components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('rodape').innerHTML = data;
      });
});

function criptografar () {
  /*
  A letra "e" é convertida para "enter"
  A letra "i" é convertida para "imes"
  A letra "a" é convertida para "ai"
  A letra "o" é convertida para "ober"
  A letra "u" é convertida para "ufat"
  */
  let textoBase = document.querySelector("textarea").value;
  console.log(textoBase);
}
  
  