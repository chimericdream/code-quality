/* eslint-disable filenames/no-index */
/* global module */
'use strict';

const possibleErrors = require('./lib/rules/core/possible-errors.js');
const languageFeatures = require('./lib/rules/core/language-features.js');
const stylisticIssues = require('./lib/rules/core/stylistic-issues.js');

module.exports = {
    rules: {
        ...possibleErrors,
        ...languageFeatures,
        ...stylisticIssues,
    },
};
