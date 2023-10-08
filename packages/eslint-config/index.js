/* global module */

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

const warningComments = [
    'fix',
    'todo',
    'fixme',
    'research',
    'xxx',
].reduce((acc, key) => [...acc, `@${key}`], []);

module.exports = {
    env: {
        es2023: true,
    },
    rules: {
        // Possible Problems
        'array-callback-return': ['error', {allowImplicit: true}],
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': ['error', {allowImplicit: false}],
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-const-assign': 'error',
        'no-constant-binary-expression': 'warn',
        'no-constant-condition': 'warn',
        'no-constructor-return': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'warn',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': ['error', {includeExports: true}],
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        'no-fallthrough': ['error', {commentPattern: '/falls?\\s?through/i'}],
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'warn',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-new-symbol': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'warn',
        'no-self-assign': ['error', {props: true}],
        'no-self-compare': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-undef': 'error',
        'no-unexpected-multiline': 'off',
        'no-unmodified-loop-condition': 'warn',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unsafe-optional-chaining': ['error', {disallowArithmeticOperators: true}],
        'no-unused-private-class-members': 'warn',
        'no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                caughtErrors: 'all',
                ignoreRestSiblings: true,
                varsIgnorePattern: 'unused',
            },
        ],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': ['error', {requireStringLiterals: true}],

        // Suggestions
        'accessor-pairs': 'warn',
        'arrow-body-style': [
            'warn',
            'as-needed',
        ],
        // var is prohibited anyway, so this shouldn't really affect anything
        'block-scoped-var': 'error',
        'camelcase': ['warn', {properties: 'always'}],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'complexity': 'warn',
        'consistent-return': 'error',
        'consistent-this': 'off',
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'warn',
        'default-param-last': 'warn',
        'dot-notation': 'warn',
        'eqeqeq': 'error',
        'func-name-matching': 'warn',
        'func-names': ['warn', 'never'],
        'func-style': [
            'error',
            'declaration',
            {allowArrowFunctions: true},
        ],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'warn',
        'id-denylist': 'off',
        'id-length': [
            'warn',
            {
                exceptions: [
                    'cb',
                    'e',
                    'el',
                    'fn',
                    'i',
                    'j',
                    'id',
                    'qs',
                    'x',
                    'y',
                    'z',
                ],
                min: 3,
            },
        ],
        'id-match': [
            'warn',
            '^(\\$|_)?([a-zA-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*|[A-Z]+(?:_[A-Z]+)*)$',
            {
                onlyDeclarations: true,
                properties: false,
            },
        ],
        'init-declarations': 'off',
        'logical-assignment-operators': 'off',
        'max-classes-per-file': ['error', 1],
        'max-depth': ['error', 4],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': ['warn', 4],
        'max-params': ['warn', 4],
        'max-statements': 'off',
        'multiline-comment-style': ['warn', 'starred-block'],
        'new-cap': 'warn',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'warn',
        'no-confusing-arrow': 'off',
        // console.* methods are disallowed in no-restricted-syntax, which allows for custom error messages
        'no-console': 'off',
        'no-continue': 'warn',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-else-return': ['error', {allowElseIf: false}],
        'no-empty': 'warn',
        'no-empty-function': ['warn', {allow: ['constructors']}],
        'no-empty-static-block': 'warn',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-label': 'warn',
        'no-extra-semi': 'off',
        'no-floating-decimal': 'off',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'warn',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': ['warn', {ignorePattern: 'webpackChunkName:\\s.+'}],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'off',
        'no-lone-blocks': 'warn',
        'no-lonely-if': 'warn',
        'no-loop-func': 'error',
        'no-magic-numbers': [
            'warn',
            {
                ignore: [
                    -1,
                    0,
                    1,
                ],
            },
        ],
        'no-mixed-operators': 'off',
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-object-constructor': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'warn',
            {
                props: true,
                ignorePropertyModificationsFor: ['^draft', '[Dd]raft$'],
            },
        ],
        'no-plusplus': ['warn', {allowForLoopAfterthoughts: true}],
        'no-proto': 'error',
        'no-redeclare': ['error', {builtinGlobals: true}],
        'no-regex-spaces': 'warn',
        'no-restricted-exports': ['error', {restrictedNamedExports: ['default']}],
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-properties': [
            'error', {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead'
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead'
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead'
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.'
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name=/^(log|dir|warn|error|info|trace)$/]',
                message: 'console.* methods are not allowed',
            },
        ],
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: [
                    ...callbackNames,
                    'el',
                    'err',
                    'error',
                ],
            },
        ],
        'no-shadow-restricted-names': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'warn',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': ['warn', {allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true}],
        'no-unused-labels': 'off',
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': ['warn', {terms: warningComments, location: 'anywhere'}],
        'no-with': 'error',
        'object-shorthand': ['warn', 'consistent-as-needed'],
        'one-var': [
            'warn',
            {
                'const': 'never',
                'let': 'consecutive',
                'separateRequires': true,
                'var': 'consecutive',
            },
        ],
        'one-var-declaration-per-line': 'off',
        'operator-assignment': ['warn', 'always'],
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
        'prefer-exponentiation-operator': 'warn',
        'prefer-named-capture-group': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-has-own': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': ['warn', {allowEmptyReject: true}],
        'prefer-regex-literals': ['warn', {disallowRedundantWrapping: true}],
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'quote-props': 'off',
        'radix': ['warn', 'always'],
        'require-await': 'warn',
        'require-unicode-regexp': 'warn',
        'require-yield': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': [
            'warn',
            'always',
            {
                block: {
                    balanced: true,
                    exceptions: ['*'],
                    markers: ['!'],
                },
                line: {
                    exceptions: ['-'],
                    markers: ['/'],
                },
            },
        ],
        'strict': ['error', 'never'],
        'symbol-description': 'warn',
        'vars-on-top': 'error',
        'yoda': 'off',

        // Layout & Formatting
        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-element-newline': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': 'off',
        'block-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': 'off',
        'computed-property-spacing': 'off',
        'dot-location': 'off',
        'eol-last': 'off',
        'func-call-spacing': 'off',
        'function-call-argument-newline': 'off',
        'function-paren-newline': 'off',
        'generator-star-spacing': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': 'off',
        'jsx-quotes': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'max-len': 'off',
        'max-statements-per-line': 'off',
        'multiline-ternary': 'off',
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-extra-parens': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': 'off',
        'no-tabs': 'off',
        'no-trailing-spaces': 'off',
        'no-whitespace-before-property': 'off',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'quotes': 'off',
        'rest-spread-spacing': 'off',
        'semi': 'off',
        'semi-spacing': 'off',
        'semi-style': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'off',
        'space-unary-ops': 'off',
        'switch-colon-spacing': 'off',
        'template-curly-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',
    },
};
