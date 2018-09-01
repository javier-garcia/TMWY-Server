import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphiqlExpress } from 'apollo-server-express';
import config from './config';
import apiRouter from './api/apiRouter';
import { graphQLRouter } from './graphQL/graphQLRouter';

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

app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
