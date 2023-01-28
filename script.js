const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve({
      nome: 'Eder',
      idade: 31,
    });
  } else {
    reject(Error('Errou miseravi'));
  }
});

const retorno = promessa
  .then((resolucao) => {
    resolucao.profissao = 'Software Developer';
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
    return 'teste';
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log('Acabou');
  });
