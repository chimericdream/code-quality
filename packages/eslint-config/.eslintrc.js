/* global module, require */

const baseConfig = require('./index');

module.exports = {
    ...baseConfig,
    rules: {
        ...baseConfig.rules,
        'no-magic-numbers': 'off',
        'filenames/match-regex': 'off',
    },
};
