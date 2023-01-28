const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('Acertou miseravi');
  } else {
    reject(Error('Errou miseravi'));
  }
});

const retorno = promessa
  .then((resolvido) => console.log(resolvido))
  .then((retorno) => console.log(retorno + 'primeira promise'))
  .then((retorno) => console.log(retorno + 'segunda promise'))
  .then((finalRetorno) => console.log(finalRetorno + 'Final'));
