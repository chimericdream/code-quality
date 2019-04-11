/* global __dirname, module, require */

const possibleErrors = require(`${__dirname}/lib/rules/core/possible-errors.js`);
const bestPractices = require(`${__dirname}/lib/rules/core/best-practices.js`);
const variables = require(`${__dirname}/lib/rules/core/variables.js`);
const nodejsCommonjs = require(`${__dirname}/lib/rules/core/nodejs-commonjs.js`);
const stylisticIssues = require(`${__dirname}/lib/rules/core/stylistic-issues.js`);
const es6 = require(`${__dirname}/lib/rules/core/es6.js`);

const babel = require(`${__dirname}/lib/rules/plugins/babel.js`);

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['babel'],
    rules: {
        strict: ['error', 'global'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...nodejsCommonjs,
        ...stylisticIssues,
        ...es6,
        ...babel,
    },
};
