/* global module */

module.exports = {
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'error',
    'no-constant-condition': ['error', {checkLoops: false}],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', {allowEmptyCatch: false}],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
        'error',
        'all',
        {
            conditionalAssign: false,
            enforceForArrowConditionals: false,
            ignoreJSX: 'all',
            nestedBinaryExpressions: false,
            returnAssign: false,
        },
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error', {allowConstructorFlags: ['u', 'y']}],
    'no-irregular-whitespace': [
        'error',
        {
            skipComments: false,
            skipRegExps: false,
            skipStrings: true,
            skipTemplates: true,
        },
    ],
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': [
        'warn',
        {
            matchDescription: '.+',
            prefer: {
                'arg': 'param',
                'argument': 'param',
                'class': 'constructor',
                'return': 'returns',
                'virtual': 'abstract',
            },
            preferType: {
                Boolean: 'boolean',
                Number: 'number',
                object: 'Object',
                String: 'string',
            },
            requireParamDescription: true,
            requireReturn: true,
            requireReturnDescription: true,
            requireReturnType: true,
        },
    ],

    // See babel/valid-typeof
    'valid-typeof': 'off',
};
