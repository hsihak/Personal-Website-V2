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
            name: 'type',
            type: 'string',
            title: 'Type',
        },
        {
            name: 'company',
            type: 'string',
            title: 'Company',
        },
        {
            name: 'companyLink',
            type: 'string',
            title: 'Company-Link',
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