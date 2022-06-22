
export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'parentTag',
      title: 'Parent Tag',
      description: '[Optional] Create a Parent-Child relationship between tags. Example: For Tag Name: Noah, the Parent book would be Bereshit.',
      type: 'reference',
      to: [{type: 'tag'}]
    }
  ],
}
