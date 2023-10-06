module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    globals: {
        JSX: 'readonly',
    },
    rules: {
        // React
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'error',
        // @TODO: turn this back on if/when the linter is able to detect prop
        //   types that come from interfaces that extend other interfaces
        //   see: https://github.com/yannickcr/eslint-plugin-react/issues/1593
        'react/default-props-match-prop-types': 'off',
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
        'react/hook-use-state': 'warn',
        'react/void-dom-elements-no-children': 'error',

        // JSX-specific rules
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/jsx-child-element-spacing': 'warn',
        'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-curly-spacing': [
            'warn',
            {
                when: 'never',
                attributes: {allowMultiline: false},
                children: true,
            },
        ],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.tsx']}],
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': 'error',
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
            },
        ],
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': [
            'warn',
            {
                maximum: 1,
                when: 'multiline',
            },
        ],
        'react/jsx-newline': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': ['warn', {validStrategies: ['ternary', 'coerce']}],
        // @TODO: this could eliminate confusion when text is used in conjunction with components, which can cause spacing issues
        // (see also: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': ['warn', {allowGlobals: false}],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-one-expression-per-line': ['warn', {allow: 'single-child'}],
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: false,
                ignore: ['DNE'],
            },
        ],
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': [
            'warn',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
            },
        ],
    },
};
