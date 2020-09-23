/* global module, require */

const baseConfig = require('./index');

module.exports = {
    root: true,
    ...baseConfig,
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        ...baseConfig.rules,
        'array-element-newline': 'off',
        'lines-around-comment': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'no-magic-numbers': 'off',
    },
};
