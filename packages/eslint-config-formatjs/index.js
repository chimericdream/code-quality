/* global module */

module.exports = {
    plugins: ['formatjs'],
    rules: {
        'blacklist-elements': 'off',
        'enforce-default-message': 'error',
        'enforce-description': 'error',
        'enforce-placeholders': 'error',
        'enforce-plural-rules': [
            'warn',
            {
                zero: true,
                one: true,
                two: true,
                few: true,
                many: true,
                other: true,
            },
        ],
        'no-emoji': 'error',
        'no-multiple-plurals': 'off',
        'no-offset': 'warn',
        'supported-datetime-skeleton': 'error',
    },
};
