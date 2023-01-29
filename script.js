const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
});
