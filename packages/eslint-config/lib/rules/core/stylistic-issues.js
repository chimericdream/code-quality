/* eslint-disable max-lines */
/* global module, require */

const {warningComments} = require('../../config.js');

module.exports = {
    'array-bracket-newline': [
        'warn',
        {
            minItems: 3,
            multiline: true,
        },
    ],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': [
        'warn',
        {
            minItems: 3,
            multiline: true,
        },
    ],
    'block-spacing': ['warn', 'never'],
    'brace-style': [
        'warn',
        'stroustrup',
        {allowSingleLine: true},
    ],
    'camelcase': ['warn', {properties: 'always'}],
    'capitalized-comments': 'off',
    'comma-dangle': [
        'warn',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
        },
    ],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'consistent-this': 'off',
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'func-name-matching': 'warn',
    'func-names': ['warn', 'never'],
    'func-style': [
        'error',
        'declaration',
        {allowArrowFunctions: true},
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
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
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'indent': [
        'error',
        4,
        {
            ArrayExpression: 1,
            CallExpression: {arguments: 'first'},
            flatTernaryExpressions: false,
            FunctionExpression: {
                body: 1,
                parameters: 'first',
            },
            ImportDeclaration: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            outerIIFEBody: 1,
            SwitchCase: 1,
        },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
        'warn',
        {
            afterColon: true,
            beforeColon: false,
            mode: 'minimum',
        },
    ],
    'keyword-spacing': [
        'error',
        {
            after: true,
            before: true,
        },
    ],
    'line-comment-position': ['warn', {position: 'above'}],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
        'warn',
        {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
            allowClassStart: true,
            allowClassEnd: true,
            ignorePattern: `(${warningComments.join('|')}|${warningComments.join('|').toUpperCase()}|noinspection)`,
        },
    ],
    'lines-between-class-members': ['warn', 'always'],
    'max-depth': ['error', 4],
    'max-len': [
        'warn',
        {
            code: 120,
            ignorePattern: `(import\\s+.+from\\s+|(?:const|var)\\s+.+=\\s*require\\([^)]+\\)|(?:\\/\\/|\\/\\*)\\s*eslint-|(?:\\/\\/|\\/\\*)\\s*(?:${warningComments.join('|')}|${warningComments.join('|').toUpperCase()}))`,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        },
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': ['warn', 4],
    'max-params': ['warn', 4],
    'max-statements': 'off',
    'max-statements-per-line': ['warn', {max: 1}],
    'multiline-comment-style': ['warn', 'starred-block'],
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 2}],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'warn',
    'no-inline-comments': 'warn',
    'no-lonely-if': 'warn',
    'no-mixed-operators': ['error', {allowSamePrecedence: true}],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
        'warn',
        {
            max: 1,
            maxBOF: 0,
            maxEOF: 1,
        },
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['warn', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': [
        'error',
        {
            selector: "CallExpression[callee.object.name='console'][callee.property.name=/^(log|dir|warn|error|info|trace)$/]",
            message: 'console.* methods are not allowed. Consider using the LOG utility provided by @touchnet/js-utils instead',
        },
    ],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': ['warn', 'beside'],
    'object-curly-newline': [
        'warn',
        {
            minProperties: 4,
            multiline: true,
            consistent: true,
        },
    ],
    'object-curly-spacing': ['warn', 'never'],
    'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],
    'one-var': [
        'warn',
        {
            'const': 'never',
            'let': 'consecutive',
            'separateRequires': true,
            'var': 'consecutive',
        },
    ],
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': [
        'warn',
        'before',
        {
            overrides: {
                '+': 'before',
                '-': 'before',
                '?': 'before',
                ':': 'before',
            },
        },
    ],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',
    'quote-props': [
        'warn',
        'consistent-as-needed',
        {keywords: true},
    ],
    'quotes': [
        'warn',
        'single',
        {
            allowTemplateLiterals: true,
            avoidEscape: true,
        },
    ],
    'semi': ['error', 'always'],
    'semi-spacing': ['warn', {before: false, after: true}],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': [
        'warn',
        {
            anonymous: 'never',
            asyncArrow: 'always',
            named: 'never',
        },
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': [
        'warn',
        {
            words: true,
            nonwords: false,
        },
    ],
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
    'switch-colon-spacing': [
        'warn',
        {
            after: true,
            before: false,
        },
    ],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'warn',
};
