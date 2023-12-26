export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'projectStatus',
            type: 'string',
            title: 'ProjectStatus',
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Overview',
        },
        {
            name: 'overviewAuthor',
            type: 'string',
            title: 'OverviewAuthor',
        },
        {
            name: 'members',
            type: 'array',
            title: 'Members',
            of: [{type: 'string'}],
        },
        {
            name: 'date',
            type: 'string',
            title: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'technologies',
            type: 'array',
            title: 'Technologies',
            of: [{type: 'string'}],
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'githubLink',
            type: 'string',
            title: 'Github-Link',
        },
        {
            name: 'demoLink',
            type: 'string',
            title: 'Demo-Link'
        },
        {
            name: 'devPostLink',
            type: 'string',
            title: 'DevPost-Link',
        },
        {
            name: 'prototypeLink',
            type: 'string',
            title: 'Prototype-Link',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: (input: string) => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            }
        }
    ]
}