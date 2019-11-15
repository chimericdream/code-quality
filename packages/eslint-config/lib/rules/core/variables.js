/* global module */
'use strict';

module.exports = {
    'init-declarations': ['error', 'always'],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-shadow': [
        'error',
        {
            allow: [
                'resolve',
                'reject',
                'done',
                'cb',
                'callback',
            ],
            builtinGlobals: false,
            hoist: 'all',
        },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', {'typeof': true}],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
        'error',
        {
            args: 'after-used',
            caughtErrors: 'all',
            ignoreRestSiblings: true,
            vars: 'all',
        },
    ],
    'no-use-before-define': [
        'error',
        {
            classes: true,
            functions: true,
            variables: true,
        },
    ],
};
