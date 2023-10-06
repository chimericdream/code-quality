/* global module */

module.exports = {
    plugins: ['formatjs'],
    rules: {
        'formatjs/blacklist-elements': 'off',
        'formatjs/enforce-default-message': 'error',
        'formatjs/enforce-description': 'error',
        'formatjs/enforce-id': 'off',
        'formatjs/enforce-placeholders': 'error',
        'formatjs/enforce-plural-rules': [
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
        'formatjs/no-camel-case': 'off',
        'formatjs/no-complex-selectors': ['warn', {limit: 10}],
        'formatjs/no-emoji': 'error',
        'formatjs/no-id': 'off',
        'formatjs/no-multiple-plurals': 'off',
        'formatjs/no-multiple-whitespaces': 'error',
        'formatjs/no-offset': 'warn',
    },
};
