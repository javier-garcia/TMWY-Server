import express from 'express';

export const apiRouter = express.Router();

apiRouter.use('/user', (req, res) => {
  res.json({ api: true });
});
