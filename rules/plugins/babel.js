/* global module */

module.exports = {
    'babel/new-cap': ['error', {
        'newIsCap': true,
        'capIsNew': true,
        'newIsCapExceptions': [],
        'capIsNewExceptions': [],
        'properties': true
    }],
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': ['error', {
        'allowShortCircuit': false,
        'allowTaggedTemplates': false,
        'allowTernary': false,
    }],
    'babel/object-curly-spacing': ['error', 'never'],
    'babel/quotes': ['error', 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': false
    }],
    'babel/semi': ['error', 'always'],
};
