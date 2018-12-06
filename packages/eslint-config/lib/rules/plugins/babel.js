/* global module */

module.exports = {
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
    'babel/camelcase': ['error', {properties: 'always'}],
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
};
