/* global module */

module.exports = {
    plugins: ['formatjs'],
    rules: {
        'blacklist-elements': 'off',
        'enforce-default-message': 'error',
        'enforce-description': 'error',
        'enforce-id': 'off',
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
        'no-camel-case': 'off',
        'no-emoji': 'error',
        'no-id': 'off',
        'no-multiple-plurals': 'off',
        'no-multiple-whitespaces': 'error',
        'no-offset': 'warn',
        'supported-datetime-skeleton': 'error',
    },
};
