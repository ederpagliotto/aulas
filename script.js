const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep
  .then((r1) => {
    const r2 = r1.clone();
    r1.text().then((texto) => {
      console.log(texto);
    });
    r2.json().then((json) => {
      console.log(json);
    });
  })
  .then((text) => {
    console.log(text);
  });
