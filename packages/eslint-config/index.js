/* eslint-disable global-require, filenames/match-exported, filenames/no-index */
/* global module, require */

const update = require('immutability-helper');

const possibleErrors = require('./lib/rules/core/possible-errors.js');
const bestPractices = require('./lib/rules/core/best-practices.js');
const variables = require('./lib/rules/core/variables.js');
const nodejsCommonjs = require('./lib/rules/core/nodejs-commonjs.js');
const stylisticIssues = require('./lib/rules/core/stylistic-issues.js');
const es6 = require('./lib/rules/core/es6.js');

let config = {
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: [],
    rules: {
        strict: ['error', 'global'],
        ...possibleErrors,
        ...bestPractices,
        ...variables,
        ...nodejsCommonjs,
        ...stylisticIssues,
        ...es6,
    },
};

try {
    require.resolve('eslint-plugin-babel');
    const babel = require('./lib/rules/plugins/babel.js');

    config = update(config, {
        parser: {$set: 'babel-eslint'},
        plugins: {$push: ['babel']},
        rules: {$merge: babel},
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-filenames');
    const filenames = require('./lib/rules/plugins/filenames.js');

    config = update(config, {
        plugins: {$push: ['filenames']},
        rules: {$merge: filenames},
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-sort-class-members');
    const sortClassMembers = require('./lib/rules/plugins/sort-class-members.js');

    config = update(config, {
        plugins: {$push: ['sort-class-members']},
        rules: {$merge: sortClassMembers},
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-react');
    const reactRules = require('./lib/rules/react/react-core.js');
    const jsxRules = require('./lib/rules/react/jsx.js');

    config = update(config, {
        parserOptions: {
            ecmaFeatures: {
                jsx: {$set: true},
            },
        },
        plugins: {$push: ['react']},
        rules: {
            $merge: {
                ...reactRules,
                ...jsxRules,
            },
        },
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-jest');
    const jestRules = require('./lib/rules/plugins/jest.js');

    config = update(config, {
        plugins: {$push: ['jest']},
        rules: {$merge: jestRules},
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-jsx-a11y');
    const jsxA11yRules = require('./lib/rules/plugins/jsx-a11y.js');

    config = update(config, {
        plugins: {$push: ['jsx-a11y']},
        rules: {$merge: jsxA11yRules},
    });
} catch {
    // no-op
}

try {
    require.resolve('eslint-plugin-typescript');
    const typescriptRules = require('./lib/rules/plugins/typescript.js');

    config = update(config, {
        parser: {$set: 'typescript-eslint-parser'},
        plugins: {$push: ['typescript']},
        rules: {$merge: typescriptRules},
    });
} catch {
    // no-op
}

module.exports = config;
