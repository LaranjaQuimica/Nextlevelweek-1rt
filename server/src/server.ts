import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários')

  response.json([
    'Tué',
    'Robson',
    'Gae'
  ]);
});

app.listen(3333);
