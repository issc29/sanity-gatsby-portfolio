import tag from "./tag"

export default {
  name: 'audioTracks',
  title: 'Audio Tracks',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'tapeNumber',
      title: 'Tape Number',
      type: 'number'
    },
    {
      name: 'link',
      title: 'AWS S3 Link',
      description: 'Link to audio file in AWS S3',
      type: 'url'
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'English'},
          {title: 'Hebrew', value: 'Hebrew'},
          {title: 'Spanish', value: 'Spanish'},
        ], 
      }
    },
    {
      name: 'tapeSide',
      title: 'Tape Side',
      type: 'string',
      options: {
        list: [
          {title: '', value: ''},
          {title: 'Side A', value: 'Side A'},
          {title: 'Side B', value: 'Side B'},
        ], 
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
    },
    {
      name: 'dateGiven',
      title: 'Date Given',
      type: 'date',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'tag'},
          ]
        }
      ]
    },
  ],
}
