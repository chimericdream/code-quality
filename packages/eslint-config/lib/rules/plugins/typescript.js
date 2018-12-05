/* global module */

module.exports = {
    'typescript/adjacent-overload-signatures': 'warn',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': ['error', {allowExpressions: true}],
    'typescript/explicit-member-accessibility': 'warn',
    'typescript/generic-type-naming': ['error', '^T[A-Z][a-zA-Z]+$'],
    'typescript/interface-name-prefix': ['error', 'never'],
    'typescript/member-delimiter-style': [
        'error',
        {
            delimiter: 'semi',
            ignoreSingleLine: true,
            requireLast: true,
        },
    ],
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',

    // Already enabled in main eslint config
    'typescript/no-array-constructor': 'off',
    'typescript/no-empty-interface': 'warn',
    'typescript/no-explicit-any': 'warn',
    'typescript/no-inferrable-types': ['error', {ignoreProperties: true}],
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-parameter-properties': [
        'error',
        {
            allows: ['private', 'readonly'],
        },
    ],
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-type-alias': 'error',
    'typescript/no-unused-vars': 'error',

    // Already enabled in main eslint config
    'typescript/no-use-before-define': 'off',
    'typescript/no-var-requires': 'error',
    'typescript/prefer-namespace-keyword': 'off',
    'typescript/type-annotation-spacing': 'error',
};
