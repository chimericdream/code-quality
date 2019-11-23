/* global module */
'use strict';

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // Disable core ESLint rules superseded by ones below
        'brace-style': 'off',
        'camelcase': 'off',
        'func-call-spacing': 'off',
        'indent': 'off',
        'no-array-constructor': 'off',
        'no-empty-function': 'off',
        'no-extra-parens': 'off',
        'no-magic-numbers': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'quotes': 'off',
        'require-await': 'off',
        'semi': 'off',

        // Disable Babel ESLint rules superseded by ones below
        'babel/quotes': 'off',
        'babel/semi': 'off',

        // Disable React ESLint rules superseded or made irrelevant by ones below
        'react/prop-types': 'off',

        // Actual rules start here
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'array-simple',
                'readonly': 'array-simple',
            },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    Object: 'Use {} instead',
                    String: {
                        message: 'Use string instead',
                        fixWith: 'string',
                    },
                },
            },
        ],
        '@typescript-eslint/brace-style': ['warn', 'stroustrup', {allowSingleLine: false}],
        '@typescript-eslint/camelcase': ['warn', {properties: 'always'}],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: false,
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
        '@typescript-eslint/func-call-spacing': ['warn', 'never'],
        '@typescript-eslint/generic-type-naming': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                ArrayExpression: 1,
                CallExpression: {arguments: 'first'},
                flatTernaryExpressions: false,
                FunctionDeclaration: {
                    body: 1,
                    parameters: 'first',
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 'first',
                },
                ignoreComments: false,
                ignoredNodes: [],
                ImportDeclaration: 1,
                MemberExpression: 1,
                ObjectExpression: 1,
                outerIIFEBody: 1,
                SwitchCase: 1,
                VariableDeclarator: 1,
            },
        ],
        '@typescript-eslint/interface-name-prefix': ['error', {prefixWithI: 'never'}],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-naming': 'off',

        // @TODO: think about this
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': ['warn', {allow: ['constructors']}],
        '@typescript-eslint/no-empty-interface': ['error', {allowSingleExtends: true}],
        '@typescript-eslint/no-explicit-any': ['error', {fixToUnknown: true, ignoreRestArgs: false}],
        '@typescript-eslint/no-extra-parens': [
            'error',
            'all',
            {
                enforceForArrowConditionals: false,
                ignoreJSX: 'all',
                nestedBinaryExpressions: false,
            },
        ],
        '@typescript-eslint/no-extraneous-class': [
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: true,
                allowStaticOnly: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': ['error', {ignoreVoid: true}],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
                ignore: [-1, 0, 1],
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
            },
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksConditionals: true,
                checksVoidReturn: true,
            },
        ],
        '@typescript-eslint/no-namespace': [
            'error',
            {
                allowDeclarations: false,
                allowDefinitionFiles: true,
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
        '@typescript-eslint/no-type-alias': [
            'error',
            {
                allowAliases: 'never',
                allowCallbacks: 'always',
                allowLiterals: 'never',
                allowMappedTypes: 'always',
                allowTupleTypes: 'always',
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': ['warn', {ignoreRhs: true}],
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                caughtErrors: 'all',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'warn',

        // Not needed since `@typescript-eslint/no-require-imports` is enabled
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',

        // Not needed; we're using ES2015 module syntax
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/quotes': [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/require-array-sort-compare': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': [
            'warn',
            {
                allowNullable: true,
                ignoreRhs: true,
            },
        ],
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                after: true,
                before: false,
                overrides: {
                    arrow: {
                        after: true,
                        before: true,
                    },
                },
            },
        ],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrayDestructuring: false,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: false,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: false,
            },
        ],
        '@typescript-eslint/unbound-method': ['error', {ignoreStatic: true}],
        '@typescript-eslint/unified-signatures': 'error',
    },
};
