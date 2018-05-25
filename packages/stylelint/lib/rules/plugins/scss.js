/* global module */

const disabled = () => null;

module.exports = {
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-named-arguments': disabled(),
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': /[a-z]+(-[a-z]+)*/,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss', 'less'],
    'scss/at-import-partial-extension-whitelist': ['scss', 'css'],
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': disabled(),
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': /[a-z]+(-[a-z]+)*/,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': ['always', {
        except: ['first-nested', 'after-dollar-variable'],
        ignore: ['after-comment', 'inside-single-line-block'],
    }],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': [/[a-z]+(-[a-z]+)*/, {
        ignore: ['global'],
    }],
    'scss/percent-placeholder-pattern': /[a-z]+(-[a-z]+)*/,
    'scss/double-slash-comment-empty-line-before': ['always', {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
    }],
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-duplicate-dollar-variables': true,
};
