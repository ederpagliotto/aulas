const sobre = fetch('./image.jpg');

sobre
  .then((resolucao) => {
    return resolucao.blob();
  })
  .then((body) => {
    const blobURL = URL.createObjectURL(body);
    const imageDOM = document.querySelector('img');
    imageDOM.src = blobURL;
  });
