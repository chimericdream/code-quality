module.exports = {
    'extends': ['stylelint-config-recommended-scss'],
    'rules': {
        // Disable core Stylelint rules superseded by ones below
        'at-rule-no-unknown': null,

        // Rules start here
        'scss/at-each-key-value-single-line': true,

        'scss/at-else-closing-brace-newline-after': null,
        'scss/at-else-closing-brace-space-after': null,
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',

        'scss/at-extend-no-missing-placeholder': true,

        'scss/at-function-named-arguments': null,
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': /[a-z]+(-[a-z]+)*/u,

        'scss/at-if-closing-brace-newline-after': null,
        'scss/at-if-closing-brace-space-after': null,
        'scss/at-if-no-null': null,

        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-import-partial-extension-blacklist': ['sass', 'less'],
        'scss/at-import-partial-extension-whitelist': ['scss', 'css'],

        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': null,
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': /[a-z]+(-[a-z]+)*/u,

        'scss/at-rule-conditional-no-parentheses': null,
        'scss/at-rule-no-unknown': true,

        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-default': null,
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'after-dollar-variable'],
                ignore: ['after-comment', 'inside-single-line-block'],
            },
        ],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': [
            /[a-z]+(-[a-z]+)*/u,
            {
                ignore: ['global'],
            },
        ],

        'scss/percent-placeholder-pattern': /[a-z]+(-[a-z]+)*/u,

        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['between-comments', 'stylelint-commands'],
            },
        ],
        'scss/double-slash-comment-inline': 'never',
        'scss/double-slash-comment-whitespace-inside': 'always',

        'scss/comment-no-loud': null,

        'scss/declaration-nested-properties': 'never',
        'scss/declaration-nested-properties-no-divided-groups': true,

        'scss/dimension-no-non-numeric-values': true,

        'scss/function-color-relative': null,
        'scss/function-quote-no-quoted-strings-inside': true,
        'scss/function-unquote-no-unquoted-strings-inside': true,

        'scss/map-keys-quotes': 'always',

        'scss/media-feature-value-dollar-variable': null,

        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,

        'scss/partial-no-import': null,

        'scss/selector-nest-combinators': 'never',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': true,

        'scss/no-dollar-variables': null,
        'scss/no-duplicate-dollar-variables': true,
        'scss/no-duplicate-mixins': true,
    },
};
