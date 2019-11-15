/* global module */
'use strict';

const disabled = () => null;

module.exports = {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    'font-family-name-quotes': 'always-unless-keyword',

    'font-weight-notation': [
        'named-where-possible',
        {
            ignore: ['relative'],
        },
    ],

    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': disabled(),
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': [
        'always',
        {
            except: ['empty'],
        },
    ],
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    'string-quotes': 'double',

    'length-zero-no-unit': true,

    'unit-case': 'lower',

    'value-keyword-case': 'lower',

    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': disabled(),
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    'custom-property-empty-line-before': [
        'always',
        {
            except: ['after-custom-property', 'first-nested'],
        },
    ],

    'property-case': 'lower',

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
        'always',
        {
            except: ['after-declaration', 'first-nested'],
            ignore: ['after-comment'],
        },
    ],

    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': disabled(),
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': disabled(),
    'block-closing-brace-space-before': 'never-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': disabled(),
    'block-opening-brace-space-after': 'never-single-line',
    'block-opening-brace-space-before': 'always',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',

    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    'rule-empty-line-before': [
        'always-multi-line',
        {
            except: ['after-single-line-comment', 'first-nested'],
        },
    ],

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    'at-rule-empty-line-before': [
        'always',
        {
            except: ['after-same-name', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['else'],
        },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    'comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands'],
        },
    ],
    'comment-whitespace-inside': 'always',

    'indentation': 4,
    'linebreaks': 'unix',
    'max-empty-lines': 1,
    'max-line-length': 100,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
    'unicode-bom': 'never',
};
