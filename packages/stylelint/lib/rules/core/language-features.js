/* global module */

const disabled = () => null;

module.exports = {
    'at-rule-blacklist': disabled(),
    'at-rule-no-vendor-prefix': true,
    'at-rule-whitelist': disabled(),
    'color-named': [
        'never',
        {
            ignore: 'inside-function',
        },
    ],
    'color-no-hex': disabled(),
    'comment-word-blacklist': ['/^(TODO|FIX)/'],
    'custom-media-pattern': disabled(),
    'custom-property-pattern': '.+',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 3,
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': disabled(),
    'declaration-property-unit-whitelist': disabled(),
    'declaration-property-value-blacklist': disabled(),
    'declaration-property-value-whitelist': disabled(),
    'function-blacklist': disabled(),
    'function-url-no-scheme-relative': true,
    'function-url-scheme-blacklist': disabled(),
    'function-url-scheme-whitelist': disabled(),
    'function-whitelist': disabled(),
    'max-nesting-depth': 3,
    'media-feature-name-blacklist': disabled(),
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-whitelist': disabled(),
    'no-unknown-animations': true,
    'number-max-precision': 3,
    'property-blacklist': disabled(),
    'property-no-vendor-prefix': true,
    'property-whitelist': disabled(),
    'selector-attribute-operator-blacklist': disabled(),
    'selector-attribute-operator-whitelist': disabled(),
    'selector-class-pattern': '^[a-z]+(-[a-z]+)*(-[0-9]+)?$',
    'selector-combinator-blacklist': disabled(),
    'selector-combinator-whitelist': disabled(),
    'selector-id-pattern': '^[a-z]+(-[a-z]+)*$',
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
    'shorthand-property-no-redundant-values': true,
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
    'value-no-vendor-prefix': true,
};
