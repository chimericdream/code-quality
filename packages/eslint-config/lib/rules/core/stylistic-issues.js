/* eslint-disable max-lines */
/* global module */

module.exports = {
    'array-bracket-newline': ['error', {minItems: 4, multiline: true}],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', {minItems: 4, multiline: true}],
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],

    // See babel/camelcase
    'camelcase': 'off',
    'capitalized-comments': [
        'warn',
        'always',
        {
            block: {
                ignoreInlineComments: true,
                ignorePattern: 'pragma|ignore|noop|no-op',
            },
            line: {
                ignoreConsecutiveComments: true,
                ignorePattern: 'pragma|ignore|noop|no-op',
            },
        },
    ],
    'comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
        },
    ],
    'comma-spacing': [
        'error',
        {
            after: true,
            before: false,
        },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'func-names': ['error', 'never'],
    'func-style': [
        'error',
        'expression',
        {
            allowArrowFunctions: true,
        },
    ],
    'function-paren-newline': ['error', 'multiline'],
    'id-blacklist': 'off',
    'id-length': [
        'error',
        {
            exceptions: [
                '_',
                '__',
                '$',
                'a',
                'b',
                'cb',
                'e',
                'el',
                'ex',
                'fn',
                'i',
                'j',
                'rp',
                't',
                'x',
                'y',
            ],
            min: 3,
            properties: 'always',
        },
    ],
    /* eslint-disable array-element-newline */
    'id-match': [
        'error',
        /* eslint-disable-next-line max-len */
        '^\\$?([A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*|[A-Z][A-Z0-9]*(?:_[A-Z][A-Z0-9]*)*|[a-z][a-z0-9]*(?:[A-Z][a-z0-9]*)*)$',
        {properties: true},
    ],
    /* eslint-enable array-element-newline */
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': [
        'warn',
        4,
        {
            ArrayExpression: 1,
            ImportDeclaration: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            outerIIFEBody: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
        },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
        'error',
        {
            afterColon: true,
            beforeColon: false,
            mode: 'minimum',
        },
    ],
    'keyword-spacing': ['error', {after: true, before: true}],
    'line-comment-position': ['error', 'above'],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
        'error',
        {
            afterBlockComment: false,
            afterLineComment: false,
            allowArrayEnd: false,
            allowArrayStart: true,
            allowBlockEnd: false,
            allowBlockStart: true,
            allowObjectEnd: false,
            allowObjectStart: true,
            beforeBlockComment: true,
            beforeLineComment: true,
        },
    ],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', {max: 3}],
    'max-len': [
        'warn',
        {
            code: 100,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: false,
            ignoreTrailingComments: false,
            ignoreUrls: true,
            tabWidth: 4,
        },
    ],
    'max-lines': [
        'warn',
        {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    'max-lines-per-function': ['warn', {max: 30}],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['warn', {max: 5}],
    'max-statements': ['warn', 10, {ignoreTopLevelFunctions: true}],
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['error', 'always-multiline'],

    // See babel/new-cap
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
    'no-array-constructor': 'error',
    'no-bitwise': ['error', {int32Hint: true}],
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
        'error',
        {
            allowSamePrecedence: true,
            groups: [
                [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '**',
                ],
                [
                    '&',
                    '|',
                    '^',
                    '~',
                    '<<',
                    '>>',
                    '>>>',
                ],
                [
                    '==',
                    '!=',
                    '===',
                    '!==',
                    '>',
                    '>=',
                    '<',
                    '<=',
                ],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
        },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxBOF: 1,
            maxEOF: 1,
        },
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [
        'error',
        {
            ignoreComments: false,
            skipBlankLines: false,
        },
    ],
    'no-underscore-dangle': [
        'error',
        {
            allow: ['__'],
            allowAfterSuper: true,
            allowAfterThis: true,
            enforceInMethodNames: true,
        },
    ],
    'no-unneeded-ternary': ['error', {defaultAssignment: true}],
    'no-whitespace-before-property': 'error',

    // Single-line statements are disallowed via the `curly` rule
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
        'error',
        {
            consistent: true,
            minProperties: 4,
        },
    ],

    // See babel/object-curly-spacing
    'object-curly-spacing': 'off',
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': [
        'warn',
        {
            'const': 'never',
            'let': 'consecutive',
            'var': 'consecutive',
        },
    ],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': [
        'error',
        'before',
        {
            overrides: {
                ':': 'after',
                '?': 'after',
            },
        },
    ],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
        'warn',
        {blankLine: 'always', next: 'return', prev: '*'},
        {blankLine: 'always', next: '*', prev: ['const', 'let', 'var']},
        {blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var']},
        {blankLine: 'always', next: '*', prev: 'directive'},
        {blankLine: 'any', next: 'directive', prev: 'directive'},
    ],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'consistent-as-needed', {keywords: true}],

    // See babel/quotes
    'quotes': 'off',
    'require-jsdoc': [
        'warn',
        {
            require: {
                ClassDeclaration: true,
                FunctionDeclaration: true,
                MethodDefinition: true,
            },
        },
    ],

    // See babel/semi
    'semi': 'off',
    'semi-spacing': ['error', {after: true, before: false}],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': ['error', {nonwords: false, words: true}],
    'spaced-comment': [
        'error',
        'always',
        {
            block: {balanced: true, exceptions: ['*'], markers: ['!']},
            line: {
                exceptions: ['-', '+'],
                markers: ['/'],
            },
        },
    ],
    'switch-colon-spacing': ['error', {after: true, before: false}],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',
};
