/* global module */

module.exports = {
    'arrow-body-style': [
        'warn',
        'as-needed',
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': [
        'warn',
        {
            after: true,
            before: true,
        },
    ],
    'constructor-super': 'error',
    'generator-star-spacing': [
        'warn',
        {
            after: false,
            before: true,
            anonymous: {before: false, after: true},
        },
    ],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {includeExports: true}],
    'no-new-symbol': 'error',
    'no-restricted-exports': ['error', {restrictedNamedExports: ['default']}],
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': ['warn', 'consistent-as-needed'],
    'prefer-arrow-callback': ['warn', {allowUnboundThis: false}],
    'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        },
    ],
    /**
     * @TODO: turn this back on if/when eslint updates to support the following examples without errors
     *
     * const {foo, bar} = thing.subThing;
     * const {prop1, prop2} = this.props;
     *
     * Desired rule:
     * 'prefer-destructuring': [
     *     'warn',
     *     {
     *         array: true,
     *         object: true,
     *     },
     *     {enforceForRenamedProperties: true},
     * ],
     */
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': ['warn', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'yield-star-spacing': [
        'warn',
        {
            after: true,
            before: false,
        },
    ],
};
