/* global module */

const callbackNames = [
    'callback',
    'cb',
    'done',
    'next',
    'rej',
    'reject',
    'res',
    'resolve',
];

module.exports = {
    plugins: ['node'],
    rules: {
        // Possible Errors
        'n/handle-callback-err': ['warn', '^.*(e|E)rr'],
        'n/no-callback-literal': 'error',
        'n/no-exports-assign': 'error',
        'n/no-extraneous-import': 'error',
        'n/no-extraneous-require': 'error',
        'n/no-missing-import': 'error',
        'n/no-missing-require': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'warn',
        'n/no-process-exit': 'error',
        'n/no-unpublished-bin': 'error',
        'n/no-unpublished-import': 'error',
        'n/no-unpublished-require': 'error',
        'n/no-unsupported-features/es-builtins': 'error',
        'n/no-unsupported-features/es-syntax': 'error',
        'n/no-unsupported-features/node-builtins': 'error',
        // process.exit() is an error above, so this rule isn't needed
        'n/process-exit-as-throw': 'off',
        'n/shebang': 'warn',

        // Best Practices
        'n/no-deprecated-api': 'warn',

        // Stylistic Issues
        'n/callback-return': [
            'warn',
            [
                ...callbackNames,
                'send.error',
                'send.success',
            ],
        ],
        'n/exports-style': ['error', 'module.exports'],
        'n/file-extension-in-import': [
            'error',
            'always',
            {
                '.js': 'never',
                '.jsx': 'never',
                '.ts': 'never',
                '.tsx': 'never',
            },
        ],
        'n/global-require': 'warn',
        'n/no-mixed-requires': 'warn',
        'n/no-process-env': 'error',
        'n/no-restricted-import': 'off',
        'n/no-restricted-require': 'off',
        'n/no-sync': 'off',
        'n/prefer-global/buffer': 'error',
        'n/prefer-global/console': 'error',
        'n/prefer-global/process': 'error',
        'n/prefer-global/text-decoder': 'error',
        'n/prefer-global/text-encoder': 'error',
        'n/prefer-global/url-search-params': 'error',
        'n/prefer-global/url': 'error',
        'n/prefer-promises/dns': 'warn',
        'n/prefer-promises/fs': 'warn',
    },
};
