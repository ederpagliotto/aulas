const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve('Resolvido');
  } else {
    reject(Error('Erro na promise'));
  }
});

console.log(promessa);
