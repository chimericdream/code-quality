/* global module */
'use strict';

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        // Core React rules
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': ['error', 'always'],
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', {ignoreStateless: true}],
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-read-only-props': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': [
            'error',
            {
                ignore: [
                    'children',
                    'history',
                    'location',
                    'match',
                ],
            },
        ],
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': ['error', {forbidDefaultForRequired: true}],
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': ['error', {component: true, html: false}],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
            },
        ],
        'react/sort-prop-types': [
            'error',
            {
                callbacksLast: true,
                ignoreCase: true,
                requiredFirst: true,
                sortShapeProp: true,
            },
        ],
        'react/state-in-constructor': ['error', 'always'],
        'react/static-property-placement': [
            'warn',
            'static public field',
            {
                defaultProps: 'property assignment',
                propTypes: 'property assignment',
            },
        ],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        // JSX related rules
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'warn',
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                children: 'ignore',
                props: 'never',
            },
        ],
        'react/jsx-curly-newline': ['error', {multiline: 'require', singleline: 'forbid'}],
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                attributes: {allowMultiline: false, when: 'never'},
                children: {when: 'never'},
            },
        ],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-depth': ['error', {max: 5}],
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
                when: 'multiline',
            },
        ],
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
        'react/jsx-no-literals': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': ['error', {ignoreCase: true}],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                ignoreCase: true,
                noSortAlphabetically: true,
                reservedFirst: false,
                shorthandFirst: true,
                shorthandLast: false,
            },
        ],
        'react/jsx-space-before-closing': 'off',
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],

        /**
         * The following two rules just make ESLint work properly with JSX, so they
         * don't trigger "errors" per se. Hence the use of "2" instead of "error".
         */
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'ignore',
                'logical': 'ignore',
                'prop': 'ignore',
            },
        ],
    },
};
