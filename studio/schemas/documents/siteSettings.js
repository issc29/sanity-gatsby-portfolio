export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your portfolio for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your portfolio.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'person'}]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'figure'
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery'
    },
    {
      name: 'featuredClasses',
      title: 'Featured Classes',
      type: 'featuredClasses'
    },
    {
      title: 'Latest News', 
      name: 'latestNews',
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'figure'}
    ]
    },
    {
      title: 'About Hakham Faur', 
      name: 'aboutHakham',
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'image'}
    ]
    },
    {
      title: 'About Yafe Beito', 
      name: 'aboutYafeBeito',
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'image'}
    ]
    },
    {
      title: "Hakham Faur's Books", 
      name: 'booksText',
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'image'}
    ]
    }
  ]
}
