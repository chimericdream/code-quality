/* global module */
'use strict';

const disabled = () => null;

const identPattern = /[a-z]+(-[a-z]+)*/u;

module.exports = {
    'color-named': [
        'never',
        {
            ignore: 'inside-function',
        },
    ],
    'color-no-hex': disabled(),

    'function-blacklist': disabled(),
    'function-url-no-scheme-relative': true,
    'function-url-scheme-blacklist': disabled(),
    'function-url-scheme-whitelist': disabled(),
    'function-whitelist': disabled(),

    'keyframes-name-pattern': identPattern,

    'number-max-precision': 3,

    'time-min-milliseconds': 150,

    'unit-blacklist': [
        'em',
        {
            ignoreMediaFeatureNames: {
                em: ['max-width', 'min-width'],
            },
        },
    ],
    'unit-whitelist': disabled(),

    'shorthand-property-no-redundant-values': true,

    'value-no-vendor-prefix': true,

    'custom-property-pattern': identPattern,

    'property-blacklist': disabled(),
    'property-no-vendor-prefix': true,
    'property-whitelist': disabled(),

    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': disabled(),
    'declaration-property-unit-whitelist': disabled(),
    'declaration-property-value-blacklist': disabled(),
    'declaration-property-value-whitelist': disabled(),
    
    'declaration-block-single-line-max-declarations': 3,

    'selector-attribute-operator-blacklist': disabled(),
    'selector-attribute-operator-whitelist': disabled(),
    'selector-class-pattern': /[a-z]+(-[a-z]+)*(-[0-9]+)?/u,
    'selector-combinator-blacklist': disabled(),
    'selector-combinator-whitelist': disabled(),
    'selector-id-pattern': identPattern,
    'selector-max-attribute': disabled(),
    'selector-max-class': disabled(),
    'selector-max-combinators': disabled(),
    'selector-max-compound-selectors': disabled(),
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': disabled(),
    'selector-max-specificity': disabled(),
    'selector-max-type': disabled(),
    'selector-max-universal': disabled(),
    'selector-nested-pattern': disabled(),
    'selector-no-qualifying-type': [
        true,
        {
            ignore: ['attribute', 'class'],
        },
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': disabled(),
    'selector-pseudo-class-whitelist': disabled(),
    'selector-pseudo-element-blacklist': disabled(),
    'selector-pseudo-element-whitelist': disabled(),

    'media-feature-name-blacklist': disabled(),
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-whitelist': disabled(),
    'media-feature-name-whitelist': disabled(),

    'custom-media-pattern': disabled(),

    'at-rule-blacklist': disabled(),
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-requirelist': [
        true,
        {
            'font-face': ['font-family', 'font-style'],
        }
    ],
    'at-rule-whitelist': disabled(),

    'comment-word-blacklist': [/^@?(fix|todo|fixme|research|xxx)/iu],

    'max-nesting-depth': 3,
    'no-unknown-animations': true,
};
