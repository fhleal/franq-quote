import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());

app.get('/api/finance', async (req, res) => {
  try {
    const response = await axios.get('https://api.hgbrasil.com/finance', {
      params: {
        key: '8a6ab20f',
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Erro ao buscar dados da HG Brasil:', err.message);
    res.status(500).json({ error: 'Erro ao buscar dados da API' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
