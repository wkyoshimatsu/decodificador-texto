document.addEventListener('DOMContentLoaded', function() {
    console.log('Documento carregado!');
    
    // Incluir header e footer dinamicamente
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

      fetch('/components/nenhumaMensagemEncontrada.html')
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
  
  