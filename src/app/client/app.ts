import express from 'express';
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send('Client Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});