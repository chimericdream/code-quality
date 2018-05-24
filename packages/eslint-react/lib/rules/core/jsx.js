/* global module */

module.exports = {
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', {
        when: 'never',
        attributes: {allowMultiline: false, when: 'never'},
        children: {when: 'never'},
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': [
        'error',
        {
            eventHandlerPropPrefix: 'on',
            eventHandlerPrefix: '(handle|toggle)',
        },
    ],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': ['error', {max: 3}],
    'react/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
    }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-brace-presence': [
        'error',
        {
            children: 'always',
            props: 'always',
        },
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
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
    'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
    }],

    /**
     * The following two rules just make ESLint work properly with JSX, so they
     * don't trigger "errors" per se. Hence the use of "2" instead of "error".
     */
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': ['error', {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'ignore',
        'logical': 'ignore',
        'prop': 'ignore'
    }]
};
