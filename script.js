const sobre = fetch('./image.jpg');

sobre
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    console.log(body);
  });
