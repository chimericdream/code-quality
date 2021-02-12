/* global module */

module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['@babel'],
    rules: {
        // Superseded by rules below
        'new-cap': 'off',
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'semi': 'off',

        '@babel/new-cap': 'error',
        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
            },
        ],
        '@babel/object-curly-spacing': ['warn', 'never'],
        '@babel/semi': ['error', 'always'],
    },
};
