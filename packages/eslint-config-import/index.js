/* global module */

const extensions = [
    '.ts',
    '.tsx',
    '.d.ts',
    '.js',
    '.jsx',
];

module.exports = {
    plugins: ['import'],
    settings: {
        'import/extensions': extensions,
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
                '.d.ts',
            ],
        },
        'import/resolver': {node: {extensions}},
    },
    rules: {
        // Core ESLint rules superseded by ones below
        'no-duplicate-imports': 'off',

        // Actual rules
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-restricted-paths': 'off',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'warn',
        'import/no-internal-modules': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/no-useless-path-segments': 'warn',
        'import/no-relative-parent-imports': 'off',
        'import/export': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unused-modules': 'warn',
        'import/unambiguous': 'error',
        'import/no-commonjs': 'warn',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'error',
        'import/first': 'warn',
        'import/exports-last': 'off',
        'import/no-duplicates': ['error', {considerQueryString: true}],
        'import/no-namespace': 'warn',
        'import/extensions': [
            'error',
            'always',
            {
                ignorePackages: true,
                pattern: {
                    /* eslint-disable id-length */
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                    /* eslint-enable id-length */
                },
            },
        ],
        'import/order': 'off',
        'import/newline-after-import': 'warn',
        'import/prefer-default-export': 'warn',
        'import/max-dependencies': ['warn', {max: 20}],
        'import/no-unassigned-import': ['error', {allow: ['**/*.scss']}],
        'import/no-named-default': 'error',
        'import/no-default-export': 'off',
        'import/no-named-export': 'off',
        'import/no-anonymous-default-export': 'warn',
        'import/group-exports': 'off',
        'import/dynamic-import-chunkname': [
            'error',
            {
                importFunctions: [
                    'import',
                    'React.lazy',
                    'lazy',
                ],
            },
        ],
    },
};
