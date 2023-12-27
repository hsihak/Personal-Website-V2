export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'programName',
            type: 'string',
            title: 'Program-Name',
        },
        {
            name: 'school',
            type: 'string',
            title: 'School',
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
            name: 'courses',
            type: 'array',
            title: 'Courses',
            of: [{type: 'string'}],
        },
        {
            name: 'activities',
            type: 'array',
            title: 'Activities',
            of: [{type: 'string'}],
        },
    ]
}