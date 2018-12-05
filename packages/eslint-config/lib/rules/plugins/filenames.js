/* global module */

module.exports = {
    'filenames/match-exported': ['error', [null, 'camel', 'pascal']],
    'filenames/match-regex': ['error', '^[a-z][a-z0-9]*(-[a-z][a-z0-9]*)*$'],
    'filenames/no-index': 'warn',
};
