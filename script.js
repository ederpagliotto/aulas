const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
  .then((resolucao) => {
    return resolucao.json();
  })
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.bairro;
  });
