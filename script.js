const sobre = fetch('./sobre.html');

sobre
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((text) => {
    const pagina = document.querySelector('.conteudo');
    pagina.innerHTML = text;
  });
