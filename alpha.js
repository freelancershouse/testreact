const inputData = require('./data/case-alpha/data-from-api.json');
const fs = require('fs');

const winston = require('winston');
const { processData } = require('./alphaProcessor');
const files = new winston.transports.File({ filename: 'combined.log' });
// const console = new winston.transports.Console();

// winston.add(console);
winston.add(files);
winston.level = 'debug';

const s = processData(inputData);
fs.writeFileSync(`${__dirname}/data/case-alpha/processed-data.json`, JSON.stringify(s, null, 4));
