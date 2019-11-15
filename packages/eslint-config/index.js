/* global __dirname, module, require */
'use strict';

const possibleErrors = require(`${__dirname}/lib/rules/core/possible-errors.js`);
const bestPractices = require(`${__dirname}/lib/rules/core/best-practices.js`);
const variables = require(`${__dirname}/lib/rules/core/variables.js`);
const nodejsCommonjs = require(`${__dirname}/lib/rules/core/nodejs-commonjs.js`);
const stylisticIssues = require(`${__dirname}/lib/rules/core/stylistic-issues.js`);
const es6 = require(`${__dirname}/lib/rules/core/es6.js`);

module.exports = {
    rules: {
        strict: ['error', 'global'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...nodejsCommonjs,
        ...stylisticIssues,
        ...es6,
    },
};
