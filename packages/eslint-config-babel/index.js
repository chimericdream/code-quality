/* global module */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['babel'],
    rules: {
        // Superseded by rules below
        'camelcase': 'off',
        'new-cap': 'off',
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'quotes': 'off',
        'semi': 'off',
        'valid-typeof': 'off',

        // Actual Babel rules
        'babel/camelcase': ['error', {properties: 'always'}],
        'babel/new-cap': [
            'error',
            {
                capIsNew: true,
                capIsNewExceptions: [],
                newIsCap: true,
                newIsCapExceptions: [],
                properties: true,
            },
        ],
        'babel/no-invalid-this': 'error',
        'babel/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: false,
                allowTaggedTemplates: false,
                allowTernary: false,
            },
        ],
        'babel/object-curly-spacing': ['error', 'never'],
        'babel/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: false,
                avoidEscape: true,
            },
        ],
        'babel/semi': ['error', 'always'],
        'babel/valid-typeof': 'error',
    },
};
