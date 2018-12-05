/* global module, require */

const config = require('../../config.js');
const {restrictedModules} = config;

module.exports = {
    'arrow-body-style': ['error', 'as-needed', {requireReturnForObjectLiteral: false}],
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: false}],
    'arrow-spacing': ['error', {after: true, before: true}],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'before'],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {includeExports: true}],
    'no-new-symbol': 'error',
    'no-restricted-imports': ['error'].concat(restrictedModules),
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'warn',
    'no-useless-rename': [
        'error',
        {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        },
    ],
    'no-var': 'error',
    'object-shorthand': ['error', 'consistent-as-needed'],
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: false,
        },
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
        },
    ],
    /* eslint-disable array-element-newline */
    'prefer-destructuring': [
        'error',
        {array: false, object: true},
        {enforceForRenamedProperties: true},
    ],
    /* eslint-enable array-element-newline */
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'before'],
};
