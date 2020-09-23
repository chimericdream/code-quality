/* global __dirname, module, require */

const possibleErrors = require(`${__dirname}/lib/rules/core/possible-errors.js`);
const bestPractices = require(`${__dirname}/lib/rules/core/best-practices.js`);
const variables = require(`${__dirname}/lib/rules/core/variables.js`);
const stylisticIssues = require(`${__dirname}/lib/rules/core/stylistic-issues.js`);
const es6 = require(`${__dirname}/lib/rules/core/es6.js`);

module.exports = {
    rules: {
        strict: ['error', 'never'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...stylisticIssues,
        ...es6,
    },
};
