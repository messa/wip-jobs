import { Router } from 'express'

import postJSON from '../util/postJSON'

const router = Router();

export default router;

router.post('/render-markdown', async (req, res) => {
  const { markdownSource } = req.body;
  try {
    const data = await postJSON('http://localhost:5000/render-markdown', { markdownSource });
    res.json({ html: data.html });
  } catch (err) {
    console.error('Failed to fetch render-markdown:', err);
    res.status(500).json({'error': err.toString()});
  }
});
