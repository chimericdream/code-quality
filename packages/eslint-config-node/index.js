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
        'node/handle-callback-err': ['warn', '^.*(e|E)rr'],
        'node/no-callback-literal': 'error',
        'node/no-exports-assign': 'error',
        'node/no-extraneous-import': 'error',
        'node/no-extraneous-require': 'error',
        'node/no-missing-import': 'error',
        'node/no-missing-require': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'warn',
        'node/no-process-exit': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'error',
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/es-syntax': 'error',
        'node/no-unsupported-features/node-builtins': 'error',

        // process.exit() is an error above, so this rule isn't needed
        'node/process-exit-as-throw': 'off',
        'node/shebang': 'warn',

        // Best Practices
        'node/no-deprecated-api': 'warn',

        // Stylistic Issues
        'node/callback-return': [
            'warn',
            [
                ...callbackNames,
                'send.error',
                'send.success',
            ],
        ],
        'node/exports-style': ['error', 'module.exports'],
        'node/file-extension-in-import': [
            'error',
            'always',
            {
                '.js': 'never',
                '.jsx': 'never',
                '.ts': 'never',
                '.tsx': 'never',
            },
        ],
        'node/global-require': 'warn',
        'node/no-mixed-requires': 'warn',
        'node/no-process-env': 'error',
        'node/no-restricted-import': 'off',
        'node/no-restricted-require': 'off',
        'node/no-sync': 'off',
        'node/prefer-global/buffer': 'error',
        'node/prefer-global/console': 'error',
        'node/prefer-global/process': 'error',
        'node/prefer-global/text-decoder': 'error',
        'node/prefer-global/text-encoder': 'error',
        'node/prefer-global/url-search-params': 'error',
        'node/prefer-global/url': 'error',
        'node/prefer-promises/dns': 'warn',
        'node/prefer-promises/fs': 'warn',
    },
};
