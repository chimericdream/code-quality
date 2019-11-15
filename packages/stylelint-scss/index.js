/* eslint-disable filenames/no-index */
/* global module */
'use strict';

const possibleErrors = require('./lib/rules/core/possible-errors.js');
const languageFeatures = require('./lib/rules/core/language-features.js');
const stylisticIssues = require('./lib/rules/core/stylistic-issues.js');

const scssRules = require('./lib/rules/plugins/scss.js');

module.exports = {
    plugins: ['stylelint-scss'],
    rules: {
        ...possibleErrors,
        ...languageFeatures,
        ...stylisticIssues,
        ...scssRules,
    },
};
