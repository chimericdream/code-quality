/* global module, require */

const {callbackNames} = require('../../config.js');

module.exports = {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': [
        'error',
        {
            builtinGlobals: false,
            hoist: 'functions',
            allow: [
                ...callbackNames,
                'el',
                'err',
                'error',
            ],
        },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
        'warn',
        {
            args: 'after-used',
            caughtErrors: 'all',
            ignoreRestSiblings: true,
            varsIgnorePattern: 'unused',
        },
    ],
    'no-use-before-define': 'error',
};
