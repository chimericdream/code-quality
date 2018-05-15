/* global module */

module.exports = {
    'sort-class-members/sort-class-members': [
        'error',
        {
            accessorPairPositioning: 'getThenSet',
            order: [
                '[static-properties]',
                '[static-methods]',
                '[properties]',
                '[conventional-private-properties]',
                'constructor',
                '[methods]',
                '[conventional-private-methods]',
            ],
        },
    ],
};
