require('source-map-support').install();

import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import app from './app';

const PORT = process.env.PORT || 5555;

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

process.on('SIGINT', () => {
  console.info(
    'Got SIGINT (aka ctrl-c in docker). Graceful shutdown ',
    new Date().toISOString()
  );
  shutdown();
});

process.on('SIGTERM', () => {
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
