/* global module */

module.exports = {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest', 'jest-formatting'],
    rules: {
        'jest/consistent-test-it': [
            'warn',
            {
                fn: 'test',
                withinDescribe: 'it',
            },
        ],
        'jest/expect-expect': ['error', {assertFunctionNames: ['expect', 'expectSaga']}],
        'jest/no-alias-methods': 'warn',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-confusing-set-timeout': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'warn',
        'jest/no-hooks': ['warn', {allow: ['afterAll', 'afterEach']}],
        'jest/no-identical-title': 'warn',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-large-snapshots': 'warn',
        'jest/no-mocks-import': 'warn',
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-restricted-matchers': [
            'error',
            {
                resolves: 'Use `expect(await promise)` instead.',
                toBeFalsy: null,
                toBeTruthy: null,
            },
        ],
        'jest/no-standalone-expect': [
            'error',
            {
                additionalTestBlockFunctions: ['each.test', 'each.it'],
            },
        ],
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-untyped-mock-factory': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-each': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-expect-assertions': 'warn',
        'jest/prefer-hooks-in-order': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/prefer-snapshot-hint': ['warn', 'always'],
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',

        'jest-formatting/padding-around-after-all-blocks': 'warn',
        'jest-formatting/padding-around-after-each-blocks': 'warn',
        'jest-formatting/padding-around-before-all-blocks': 'warn',
        'jest-formatting/padding-around-before-each-blocks': 'warn',
        'jest-formatting/padding-around-expect-groups': 'warn',
        'jest-formatting/padding-around-describe-blocks': 'warn',
        'jest-formatting/padding-around-test-blocks': 'warn',
        'jest-formatting/padding-around-all': 'warn',
    },
};
