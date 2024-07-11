document.addEventListener('DOMContentLoaded', function() {
    console.log('Documento carregado!');
    
    // Incluir header e footer dinamicamente
    fetch('/components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('cabecalho').innerHTML = data;
      });
  
    fetch('/components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('rodape').innerHTML = data;
      });

    fetch('/components/nenhumaMensagemEncontrada.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('apresentacao__saida__conteudo').innerHTML = data;
    });
});
  
  