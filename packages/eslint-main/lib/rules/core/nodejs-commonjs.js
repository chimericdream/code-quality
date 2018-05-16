/* global module, require */

const config = require('../../config.js');
const {restrictedModules} = config;

module.exports = {
    'callback-return': [
        'error',
        [
            'callback',
            'cb',
            'done',
            'error',
            'next',
            'success',
        ],
    ],
    'global-require': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': [
        'error',
        {
            allowCall: true,
            grouping: false,
        },
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': ['error'].concat(restrictedModules),
    'no-sync': ['error', {allowAtRootLevel: true}],
};
