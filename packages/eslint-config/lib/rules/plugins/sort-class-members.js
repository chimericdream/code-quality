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
                '[arrow-function-properties]',
                'constructor',
                '[accessor-pairs]',
                '[methods]',
                '[conventional-private-methods]',
                '[everything-else]',
            ],
        },
    ],
};
