import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { add } from './lib/calc';

const app = express();

app
  .use(helmet())
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('common'))
  .use(cors());

app.get('/', async (req, res) => {
  const result = await add(2, 1);
  res.send({ result });
});

export default app;
