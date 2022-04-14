import express from 'express';

const port = 3333;
const app = express();

app.get('/', function (req, res) {
  res.send('Sever Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});