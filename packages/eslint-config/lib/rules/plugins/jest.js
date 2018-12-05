/* global module */

module.exports = {
    'jest/consistent-test-it': [
        'error',
        {
            fn: 'test',
            withinDescribe: 'it',
        },
    ],
    'jest/expect-expect': ['error', {assertFunctionNames: ['expect', 'expectSaga']}],
    'jest/lowercase-name': ['error', {ignore: ['describe']}],
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-hooks': ['error', {allow: ['afterEach']}],
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',

    // @TODO: research more about this
    'jest/no-large-snapshots': 'off',
    'jest/no-test-callback': 'warn',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-expect-assertions': 'warn',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/require-tothrow-message': 'warn',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
};
