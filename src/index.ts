require('source-map-support').install();

import app from './app';

const PORT = process.env.PORT || 80;

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
