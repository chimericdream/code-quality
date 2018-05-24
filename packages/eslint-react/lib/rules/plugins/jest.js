/* global module */

module.exports = {
    'jest/consistent-test-it': [
        'error',
        {
            fn: 'test',
            withinDescribe: 'it'
        },
    ],
    'jest/lowercase-name': ['error', {ignore: ['describe']}],
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': ['error', {allow: ['afterEach']}],
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    // @TODO: research more about this
    'jest/no-large-snapshots': 'off',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-expect-assertions': 'warn',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
};
