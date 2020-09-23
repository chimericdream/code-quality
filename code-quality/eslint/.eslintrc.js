const baseConfig = require('./config');

module.exports = {
    ...baseConfig,
    root: true,
    rules: {
        ...baseConfig.rules,
        'array-element-newline': 'off',
        'lines-around-comment': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'no-magic-numbers': 'off',
    },
};
