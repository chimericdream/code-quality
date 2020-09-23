/* global module */

module.exports = {
    parser: 'babel-eslint',
    plugins: ['babel'],
    rules: {
        // Superseded by rules below
        'new-cap': 'off',
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        'quotes': 'off',
        'semi': 'off',
        'valid-typeof': 'off',

        'babel/new-cap': 'error',
        'babel/no-invalid-this': 'error',
        'babel/object-curly-spacing': ['warn', 'never'],
        'babel/quotes': [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        'babel/semi': ['error', 'always'],
        'babel/no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
            },
        ],
        'babel/valid-typeof': ['error', {requireStringLiterals: true}],
    },
};
