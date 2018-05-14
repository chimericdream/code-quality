/* global module */

module.exports = {
    'array-bracket-newline': ['error', {'multiline': true, 'minItems': 4}],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', {'multiline': true, 'minItems': 4}],
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', {'properties': 'always'}],
    'capitalized-comments': ['warn', 'always', {
        'block': {
            'ignoreInlineComments': true,
        },
        'line': {
            'ignoreConsecutiveComments': true,
        },
    }],
    'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
        'imports': 'always-multiline',
        'objects': 'always-multiline',
    }],
    'comma-spacing': ['error', {
        'after': true,
        'before': false,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression', {
        'allowArrowFunctions': true,
    }],
    'function-paren-newline': ['error', 'multiline'],
    'id-blacklist': 'off',
    'id-length': ['error', {
        'min': 3,
        'properties': 'always',
        'exceptions': ['_', '__', '$', 'el', 'i', 'j', 'rp', 't']
    }],
    'id-match': ['error', '^([A-Z][A-Z0-9]*(?:_[A-Z][A-Z0-9]*)*|[a-z][a-z0-9]*(?:[A-Z][a-z0-9]+)*)$', {'properties': true}],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['warn', 4, {
        'ArrayExpression': 1,
        'ImportDeclaration': 1,
        'MemberExpression': 1,
        'ObjectExpression': 1,
        'outerIIFEBody': 0,
        'SwitchCase': 1,
        'VariableDeclarator': 1,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
        'afterColon': true,
        'beforeColon': false,
        'mode': 'minimum',
    }],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'line-comment-position': ['error', 'above'],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
        'beforeBlockComment': true,
        'afterBlockComment': false,
        'beforeLineComment': true,
        'afterLineComment': false,
        'allowBlockStart': true,
        'allowBlockEnd': false,
        'allowObjectStart': true,
        'allowObjectEnd': false,
        'allowArrayStart': true,
        'allowArrayEnd': false
    }],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', {'max': 3}],
    'max-len': ['warn', {
        'code': 100,
        'ignoreComments': false,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': false,
        'ignoreTrailingComments': false,
        'ignoreUrls': true,
        'tabWidth': 4,
    }],
    'max-lines': ['warn', {
        'max': 300,
        'skipBlankLines': true,
        'skipComments': true,
    }],
    'max-nested-callbacks': ['error', {'max': 3}],
    'max-params': ['warn', {'max': 5}],
    'max-statements': ['warn', 10, {'ignoreTopLevelFunctions': true}],
    'max-statements-per-line': ['error', {'max': 1}],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['error', 'always-multiline'],

    // see babel/new-cap
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 2}],
    'no-array-constructor': 'error',
    'no-bitwise': ['error', {'int32Hint': true}],
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {
        'groups': [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'], ['in', 'instanceof']],
        'allowSamePrecedence': true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {
        'max': 1,
        'maxBOF': 1,
        'maxEOF': 1
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
        'ignoreComments': false,
        'skipBlankLines': false,
    }],
    'no-underscore-dangle': ['error', {
        'allow': ['__'],
        'allowAfterSuper': true,
        'allowAfterThis': true,
        'enforceInMethodNames': true,
    }],
    'no-unneeded-ternary': ['error', {'defaultAssignment': true}],
    'no-whitespace-before-property': 'error',

    // Single-line statements are disallowed via the `curly` rule
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
        'consistent': true,
        'minProperties': 4,
    }],

    // see babel/object-curly-spacing
    'object-curly-spacing': 'off',
    'object-property-newline': ['error', {'allowAllPropertiesOnSameLine': true}],
    'one-var': ['warn', {
        'var': 'consecutive',
        'let': 'consecutive',
        'const': 'never',
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before', {
        'overrides': {
            '?': 'after',
            ':': 'after',
        }
    }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
        'warn',
        {'blankLine': 'always', 'prev': '*', 'next': 'return'},
        {'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
        {'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
        {'blankLine': 'always', 'prev': 'directive', 'next': '*'},
        {'blankLine': 'any', 'prev': 'directive', 'next': 'directive'},
    ],
    'quote-props': ['error', 'consistent-as-needed', {'keywords': true}],

    // see babel/quotes
    'quotes': 'off',
    'require-jsdoc': ['warn', {
        'require': {
            'ClassDeclaration': true,
            'FunctionDeclaration': true,
            'MethodDefinition': true,
        }
    }],

    // see babel/semi
    'semi': 'off',
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'semi-style': ['error', 'last'],
    'sort-keys': ['warn', 'asc', {'caseSensitive': false, 'natural': true}],
    'sort-vars': ['warn', {'ignoreCase': true}],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {'int32Hint': false}],
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    'spaced-comment': ['error', 'always', {
        'line': {
            'markers': ['/'],
            'exceptions': ['-', '+']
        },
        'block': {'markers': ['!'], 'exceptions': ['*'], 'balanced': true}
    }],
    'switch-colon-spacing': ['error', {'after': true, 'before': false}],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',
};
