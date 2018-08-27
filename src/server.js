import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import apiRouter from './api/apiRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  config.db.url,
  {
    useNewUrlParser: true,
  }
);

app.use('/api', apiRouter);
app.use('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
