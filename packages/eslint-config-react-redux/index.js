/* global module */
'use strict';

module.exports = {
    plugins: ['react-redux'],
    rules: {
        // Superseded by the rule below
        'react/no-unused-prop-types': 'off',

        'react-redux/connect-prefer-minimum-two-arguments': 'warn',
        'react-redux/connect-prefer-named-arguments': 'error',
        'react-redux/mapDispatchToProps-returns-object': 'error',
        'react-redux/mapDispatchToProps-prefer-shorthand': 'warn',
        'react-redux/mapDispatchToProps-prefer-parameters-names': 'error',
        'react-redux/mapStateToProps-no-store': 'error',
        'react-redux/mapStateToProps-prefer-hoisted': 'warn',
        'react-redux/mapStateToProps-prefer-parameters-names': 'error',
        'react-redux/mapStateToProps-prefer-selectors': 'error',
        'react-redux/useSelector-prefer-selectors': 'error',
        'react-redux/no-unused-prop-types': 'error',
        'react-redux/prefer-separate-component-file': 'off',
    },
};
