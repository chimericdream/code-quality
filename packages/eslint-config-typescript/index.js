const callbackNames = [
    'callback',
    'cb',
    'done',
    'next',
    'rej',
    'reject',
    'res',
    'resolve',
];

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // Disable core ESLint rules superseded by ones below
        'brace-style': 'off',
        'camelcase': 'off',
        'comma-spacing': 'off',
        'default-param-last': 'off',
        'dot-notation': 'off',
        'func-call-spacing': 'off',
        'indent': 'off',
        'init-declarations': 'off',
        'keyword-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-empty-function': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-magic-numbers': 'off',
        'no-redeclare': 'off',
        'no-return-await': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'quotes': 'off',
        'require-await': 'off',
        'semi': 'off',
        'space-before-function-paren': 'off',

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
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': false,
                'minimumDescriptionLength': 3,
            },
        ],
        '@typescript-eslint/ban-tslint-comment': 'error',
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
        '@typescript-eslint/brace-style': [
            'warn',
            'stroustrup',
            {allowSingleLine: false},
        ],
        '@typescript-eslint/comma-spacing': ['error', {before: false, after: true}],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: true,
            },
        ],
        '@typescript-eslint/default-param-last': 'warn',
        '@typescript-eslint/dot-notation': ['warn', {allowPrivateClassPropertyAccess: false}],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: false,
                allowHigherOrderFunctions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
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
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/keyword-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        '@typescript-eslint/lines-between-class-members': ['warn', 'always'],
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
        // @TODO: think about this
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: [
                    'camelCase',
                    'PascalCase',
                    'UPPER_CASE',
                ],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: false,
                },
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: [
                    'is',
                    'should',
                    'has',
                    'can',
                    'did',
                    'will',
                    'show',
                    'hide',
                    'was',
                    'had',
                ],
            },
            {
                selector: ['function'],
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-function': ['warn', {allow: ['constructors']}],
        '@typescript-eslint/no-empty-interface': ['error', {allowSingleExtends: true}],
        '@typescript-eslint/no-explicit-any': ['error', {fixToUnknown: true, ignoreRestArgs: false}],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-parens': [
            'error',
            'all',
            {
                enforceForArrowConditionals: false,
                ignoreJSX: 'all',
                nestedBinaryExpressions: false,
            },
        ],
        '@typescript-eslint/no-extra-semi': 'error',
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
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
                ignore: [
                    -1,
                    0,
                    1,
                ],
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
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-redeclare': [
            'error',
            {
                builtinGlobals: true,
                ignoreDeclarationMerge: true,
            },
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow':  [
            'error',
            {
                allow: [
                    ...callbackNames,
                    'el',
                    'err',
                    'error',
                ],
                builtinGlobals: false,
                hoist: 'functions',
                ignoreTypeValueShadow: false,
                ignoreFunctionTypeParameterNameValueShadow: false,
            },
        ],
        '@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
        '@typescript-eslint/no-throw-literal': 'warn',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
            'warn',
            {
                allowComparingNullableBooleansToTrue: true,
                allowComparingNullableBooleansToFalse: true,
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': [
            'warn',
            {
                allowConstantLoopConditions: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
        ],
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                caughtErrors: 'all',
                ignoreRestSiblings: true,
                varsIgnorePattern: 'unused',
            },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'warn',
        // Not needed since `@typescript-eslint/no-require-imports` is enabled
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        // Not needed; we're using ES2015 module syntax
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
            },
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
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
        '@typescript-eslint/restrict-template-expressions': [
            'warn',
            {
                allowNumber: true,
                allowBoolean: false,
                allowAny: false,
                allowNullish: false,
            },
        ],
        '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            'warn',
            {
                allowString: false,
                allowNumber: false,
                allowNullableObject: false,
                allowNullableBoolean: true,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
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
