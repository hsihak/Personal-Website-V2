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
            name: 'overview',
            type: 'string',
            title: 'Overview',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
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