export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'position',
            type: 'string',
            title: 'Position',
        },
        {
            name: 'companty',
            type: 'string',
            title: 'Company',
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            name: 'startDate',
            type: 'string',
            title: 'Start-Date',
        },
        {
            name: 'endDate',
            type: 'string',
            title: 'End-Date',
        },
        {
            name: 'descriptionLists',
            type: 'array',
            title: 'DescriptionLists',
            of: [{type: 'string'}],
        },
    ]
}