/* global module, require */

const possibleErrors = require('./lib/rules/core/possible-errors.js');
const bestPractices = require('./lib/rules/core/best-practices.js');
const variables = require('./lib/rules/core/variables.js');
const nodejsCommonjs = require('./lib/rules/core/nodejs-commonjs.js');
const stylisticIssues = require('./lib/rules/core/stylistic-issues.js');
const es6 = require('./lib/rules/core/es6.js');

const babel = require('./lib/rules/plugins/babel.js');
const sortClassMembers = require('./lib/rules/plugins/sort-class-members.js');

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
    plugins: ['babel', 'sort-class-members'],
    rules: {
        strict: ['error', 'global'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...nodejsCommonjs,
        ...stylisticIssues,
        ...es6,
        ...babel,
        ...sortClassMembers,
    },
};
