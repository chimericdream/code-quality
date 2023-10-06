/* global module */

const disabled = () => null;

const identPattern = /[a-z]+(-[a-z]+)*/u;

module.exports = {
    plugins: ['stylelint-scss'],
    rules: {
        // Core Stylelint rules superseded by ones below
        'at-rule-no-unknown': disabled(),
        'function-no-unknown': disabled(),

        // Actual rules start here
        'scss/at-each-key-value-single-line': true,

        // Superseded by core block-closing-brace-newline-after rule
        'scss/at-else-closing-brace-newline-after': disabled(),
        'scss/at-else-closing-brace-space-after': disabled(),
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',

        'scss/at-extend-no-missing-placeholder': true,

        'scss/at-function-named-arguments': disabled(),
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': identPattern,

        // Superseded by core block-closing-brace-newline-after rule
        'scss/at-if-closing-brace-newline-after': disabled(),
        'scss/at-if-closing-brace-space-after': disabled(),
        'scss/at-if-no-null': true,

        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension': 'always',
        'scss/at-import-partial-extension-blacklist': ['sass', 'less'],
        'scss/at-import-partial-extension-whitelist': ['scss', 'css'],

        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': disabled(),
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': identPattern,

        'scss/at-rule-conditional-no-parentheses': disabled(),
        'scss/at-rule-no-unknown': true,

        'scss/at-use-no-unnamespaced': true,

        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-default': [true, {ignore: 'local'}],
        'scss/dollar-variable-empty-line-after': [
            'always',
            {
                except: ['before-dollar-variable', 'last-nested'],
                ignore: ['inside-single-line-block'],
            },
        ],
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'after-dollar-variable'],
                ignore: ['after-comment', 'inside-single-line-block'],
            },
        ],
        'scss/dollar-variable-first-in-block': [
            true,
            {
                ignore: ['comments', 'imports'],
            },
        ],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-no-namespaced-assignment': true,
        'scss/dollar-variable-pattern': [
            identPattern,
            {
                ignore: ['global'],
            },
        ],

        'scss/percent-placeholder-pattern': identPattern,

        'scss/comment-no-empty': true,
        'scss/comment-no-loud': disabled(),

        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['between-comments', 'stylelint-commands'],
            },
        ],
        'scss/double-slash-comment-inline': 'never',
        'scss/double-slash-comment-whitespace-inside': 'always',

        'scss/declaration-nested-properties': 'never',
        'scss/declaration-nested-properties-no-divided-groups': true,

        'scss/dimension-no-non-numeric-values': true,

        'scss/function-color-relative': disabled(),
        'scss/function-no-unknown': true,
        'scss/function-quote-no-quoted-strings-inside': true,
        'scss/function-unquote-no-unquoted-strings-inside': true,

        'scss/map-keys-quotes': 'always',

        'scss/media-feature-value-dollar-variable': 'always',

        'scss/partial-no-import': disabled(),

        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,

        'scss/selector-nest-combinators': disabled(),
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/selector-no-union-class-name': true,

        'scss/no-dollar-variables': true,
        'scss/no-duplicate-dollar-variables': [
            true,
            {
                ignoreDefaults: true,
                ignoreInside: ['at-rule'],
            },
        ],
        'scss/no-duplicate-mixins': true,
        'scss/no-global-function-names': true,
    },
};
