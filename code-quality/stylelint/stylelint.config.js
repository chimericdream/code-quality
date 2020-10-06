/* eslint-disable max-lines */

const NAME_PATTERN = '([a-z][a-z0-9]+)(-[a-z][a-z0-9]+)*';

module.exports = {
    rules: {
        // Possible errors
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'property-no-unknown': true,
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
            },
        ],
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': true,
        'comment-no-empty': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        // Limit language features
        'color-named': [
            'never',
            {
                ignore: 'inside-function',
            },
        ],
        'color-no-hex': null,
        'function-blacklist': null,
        'function-url-no-scheme-relative': null,
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': ['data', '/^http/'],
        'function-whitelist': null,
        'keyframes-name-pattern': NAME_PATTERN,
        'number-max-precision': 3,
        'time-min-milliseconds': 100,
        'unit-blacklist': null,
        'unit-whitelist': null,
        'shorthand-property-no-redundant-values': true,
        'value-no-vendor-prefix': true,
        'custom-property-pattern': 'tn-.+',
        'property-blacklist': null,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': null,
        'declaration-property-value-whitelist': null,
        'declaration-block-single-line-max-declarations': 3,
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-whitelist': null,
        'selector-class-pattern': NAME_PATTERN,
        'selector-combinator-blacklist': null,
        'selector-combinator-whitelist': null,
        'selector-id-pattern': NAME_PATTERN,
        'selector-max-attribute': null,
        'selector-max-class': null,
        'selector-max-combinators': null,
        'selector-max-compound-selectors': null,
        'selector-max-empty-lines': 0,
        'selector-max-id': 1,
        'selector-max-pseudo-class': 2,
        'selector-max-specificity': null,
        'selector-max-type': null,
        'selector-max-universal': 1,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute', 'class'],
            },
        ],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-blacklist': null,
        'selector-pseudo-element-whitelist': null,
        'media-feature-name-blacklist': null,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-name-value-whitelist': null,
        'media-feature-name-whitelist': null,
        'custom-media-pattern': null,
        'at-rule-blacklist': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-property-requirelist': null,
        'at-rule-whitelist': null,
        'comment-word-blacklist': ['/^(TODO|FIX)/'],
        'max-nesting-depth': 3,
        'no-unknown-animations': true,

        // Stylistic issues
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
        'function-comma-newline-before': null,
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
        'value-list-comma-newline-before': null,
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
        'declaration-block-semicolon-newline-before': null,
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-after': 'never',
        'block-closing-brace-space-before': 'never-single-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-newline-before': null,
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
                ignoreAtRules: [
                    'else',
                    'if',
                    'include',
                    'import',
                ],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always-single-line',
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
    },
};