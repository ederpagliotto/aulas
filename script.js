const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((text) => {
    div.innerHTML = text;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
  });
