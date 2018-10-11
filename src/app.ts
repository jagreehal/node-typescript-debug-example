import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as cors from 'cors';

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
