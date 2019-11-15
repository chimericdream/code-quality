/* global module, require */

const baseConfig = require('./index');

module.exports = {
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
