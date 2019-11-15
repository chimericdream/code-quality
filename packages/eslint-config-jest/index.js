/* eslint-disable global-require, filenames/match-exported, filenames/no-index */
/* global module, require */
'use strict';

module.exports = {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    rules: {
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
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-expect-resolves': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-hooks': ['error', {allow: ['afterEach']}],
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',

        // @TODO: research more about this
        'jest/no-large-snapshots': 'off',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-callback': 'warn',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/no-try-expect': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-expect-assertions': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-inline-snapshots': 'off',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
    },
};
