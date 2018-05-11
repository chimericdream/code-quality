/* global module */

import possibleErrors from './rules/core/possible-errors';
import bestPractices from './rules/core/best-practices';
import variables from './rules/core/variables';
import nodejsCommonjs from './rules/core/nodejs-commonjs';
import stylisticIssues from './rules/core/stylistic-issues';
import es6 from './rules/core/es6';

import babel from './rules/plugins/babel';

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
