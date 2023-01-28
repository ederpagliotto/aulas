const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('Acertou miseravi');
  } else {
    reject(Error('Errou miseravi'));
  }
});

promessa.then((resolvido) => {
  console.log(resolvido);
});
