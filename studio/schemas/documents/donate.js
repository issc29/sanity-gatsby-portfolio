export default {
  name: 'Donate',
  title: 'Donate Page',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block'
        },
        {
          type: 'youtube'
        }
      ]
    }
  ],
}
