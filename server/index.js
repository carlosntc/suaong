import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    dataHora: new Date().toLocaleString('pt-BR')
  });
});

app.listen(PORT, () => {
  console.log(`API funcionando em http://localhost:${PORT}`);
});
