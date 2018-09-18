/* eslint-disable filenames/no-index */
/* global module */

const coreRules = require('./lib/rules/typescript-core.js');

module.exports = {
    parser: 'typescript-eslint-parser',
    rules: {...coreRules},
};
