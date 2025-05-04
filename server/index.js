import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(cors());

app.get('/api/finance', async (req, res) => {
  try {
    const response = await axios.get('https://api.hgbrasil.com/finance', {
      params: {
        key: process.env.API_KEY,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Failed fetching HG Brasil:', err.message);
    res.status(500).json({ error: 'Failed fetching API data' });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
