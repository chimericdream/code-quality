/* global module */

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    globals: {
        JSX: 'readonly',
        React: 'readonly',
    },
    rules: {
        // React
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': [
            'warn',
            'always',
            {ignoreClassFields: true},
        ],
        'react/display-name': 'off',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': [
            'warn',
            {forbid: ['style']},
        ],
        'react/forbid-elements': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'warn',
        'react/iframe-missing-sandbox': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'warn',
        'react/no-did-mount-set-state': ['warn', 'disallow-in-func'],
        'react/no-did-update-set-state': ['warn', 'disallow-in-func'],
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'warn',
        'react/no-invalid-html-attribute': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'warn',
        'react/no-namespace': 'error',
        'react/no-object-type-as-default-prop': 'error',
        'react/no-redundant-should-component-update': 'warn',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-typos': 'warn',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'warn',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/no-will-update-set-state': ['warn', 'disallow-in-func'],
        'react/prefer-es6-class': ['warn', 'always'],
        'react/prefer-exact-props': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': [
            'error',
            {
                ignore: [
                    // Built into react
                    'children',
                    'key',

                    // Built into react-router
                    'history',
                    'location',
                    'match',

                    // Built into react-intl
                    'intl',
                ],
            },
        ],
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': ['error', {forbidDefaultForRequired: true}],
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'off',
        // style is already forbidden (see react/forbid-component-props and react/forbid-dom-props)
        'react/style-prop-object': 'off',
        'react/hook-use-state': ['warn', {allowDestructuredState: true}],
        'react/void-dom-elements-no-children': 'error',

        // JSX-specific rules
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.tsx']}],
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
            },
        ],
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': ['warn', {validStrategies: ['ternary', 'coerce']}],
        /*
         * @TODO: this could eliminate confusion when text is used in conjunction with components, which can cause spacing issues
         * (see also: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)
         */
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': ['warn', {allowGlobals: false}],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: false,
                ignore: ['DNE'],
            },
        ],
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/sort-default-props': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
    },
};
