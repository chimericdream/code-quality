/* eslint-disable filenames/no-index */
/* global module, require */

const coreRules = require('./lib/rules/core/react-core.js');
const jsxRules = require('./lib/rules/core/jsx.js');
const jestRules = require('./lib/rules/plugins/jest.js');

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'babel',
        'jest',
        'react',
    ],
    rules: {
        ...coreRules,
        ...jsxRules,
        ...jestRules,
    },
};
