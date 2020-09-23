module.exports = {
    plugins: ['redux-saga'],
    rules: {
        'redux-saga/yield-effects': 'error',
        'redux-saga/no-yield-in-race': 'error',
        'redux-saga/no-unhandled-errors': 'warn',
    },
};
