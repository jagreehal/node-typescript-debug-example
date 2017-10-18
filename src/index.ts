require('source-map-support').install();

import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { add } from './lib/calc';

const PORT = process.env.PORT || 5555;

const app = express();

app
  .use(helmet())
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('common'));

app.get('/', async (req, res) => {
  const result = await add(2, 0);
  res.send({ result });
});

const server = app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});

process.on('SIGINT', function onSigint() {
  console.info(
    'Got SIGINT (aka ctrl-c in docker). Graceful shutdown ',
    new Date().toISOString()
  );
  shutdown();
});

process.on('SIGTERM', function onSigterm() {
  console.info(
    'Got SIGTERM (docker container stop). Graceful shutdown ',
    new Date().toISOString()
  );
  shutdown();
});

// shut down server
function shutdown() {
  if (!server) {
    process.exit();
  } else {
    server.close(err => {
      if (err) {
        console.error(err);
        process.exitCode = 1;
      }
      process.exit();
    });
  }
}
