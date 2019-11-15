/* global module, require */
'use strict';

const baseConfig = require('./index');

module.exports = {
    root: true,
    ...baseConfig,
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        ...baseConfig.rules,
        'no-magic-numbers': 'off',
        'filenames/match-regex': 'off',
    },
};
