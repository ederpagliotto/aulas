const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve('Acertou miseravi');
    }, 1000);
  } else {
    reject(Error('Errou miseravi'));
  }
});

promessa.then((resolvido) => {
  console.log(resolvido);
});
