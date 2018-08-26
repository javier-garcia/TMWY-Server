import express from 'express';
import { apiRouter } from './api/apiRouter';

const app = express();

app.use('/api', apiRouter);
app.use('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
