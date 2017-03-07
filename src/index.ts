global.Promise = require("bluebird");
require('source-map-support').install();

import { add } from './lib/calc';

async function run() {
    return await add(2, 0);
}

run().then(r => {
    console.log(r);
});
