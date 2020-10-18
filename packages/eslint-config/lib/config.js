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

const restrictedModules = [
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'freelist',
    'module',
    'net',
    'os',
    'punycode',
    'readline',
    'repl',
    'smalloc',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tracing',
    'tty',
    'vm',
    'zlib',
];

const warningComments = [
    'fix',
    'todo',
    'fixme',
    'research',
    'xxx',
].reduce((acc, key) => [...acc, `@${key}`], []);

module.exports = {
    callbackNames,
    restrictedModules,
    warningComments,
};
