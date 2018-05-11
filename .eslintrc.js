/* global module */

const possibleErrors = require('./rules/core/possible-errors.js');
const bestPractices = require('./rules/core/best-practices.js');
const variables = require('./rules/core/variables.js');
const nodejsCommonjs = require('./rules/core/nodejs-commonjs.js');
const stylisticIssues = require('./rules/core/stylistic-issues.js');
const es6 = require('./rules/core/es6.js');

const babel = require('./rules/plugins/babel.js');

module.exports = {
    'env': {
        'es6': true,
        'node': true,
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
        },
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'plugins': [
        'babel'
    ],
    'rules': {
        'strict': ['error', 'global'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...nodejsCommonjs,
        ...stylisticIssues,
        ...es6,
        ...babel,
    },
};
