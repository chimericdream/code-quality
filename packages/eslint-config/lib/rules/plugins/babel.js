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
};
