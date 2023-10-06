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
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/default': 'error',
        'import/dynamic-import-chunkname': [
            'error', {
                importFunctions: [
                    'import', 'React.lazy', 'lazy',
                ],
            },
        ],
        'import/export': 'error',
        'import/exports-last': 'off',
        'import/extensions': [
            'error', 'always', {
                ignorePackages: true,
                pattern: {/* eslint-disable id-length */
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never', /* eslint-enable id-length */
                },
            },
        ],
        'import/first': 'warn',
        'import/group-exports': 'off',
        'import/max-dependencies': ['warn', {max: 20}],
        'import/named': 'error',
        'import/namespace': 'error',
        'import/newline-after-import': ['warn', {considerComments: true}],
        'import/no-absolute-path': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'warn',
        'import/no-commonjs': 'warn',
        'import/no-cycle': 'error',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': ['error', {'considerQueryString': true, 'prefer-inline': true}],
        'import/no-dynamic-require': 'warn',
        'import/no-empty-named-blocks': 'error',
        'import/no-extraneous-dependencies': ['error', {includeTypes: true}],
        'import/no-import-module-exports': 'error',
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-default': 'error',
        'import/no-named-export': 'off',
        'import/no-namespace': 'warn',
        'import/no-nodejs-modules': 'error',
        'import/no-relative-packages': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': ['error', {allow: ['**/*.scss']}],
        'import/no-unresolved': 'error',
        'import/no-unused-modules': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
            'error', {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                ],
                'newlines-between': 'always',
                'pathGroups': [{pattern: '@/**', group: 'internal', position: 'before'}],
                'distinctGroup': true,
                'alphabetize': {order: 'asc', caseInsensitive: false, orderImportKind: 'asc'},
            },
        ],
        'import/prefer-default-export': 'warn',
        'import/unambiguous': 'error',
    },
};
