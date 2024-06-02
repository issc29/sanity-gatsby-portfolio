// youtube.js
import getYouTubeId from 'get-youtube-id'

const Preview = ({value}) => {
	const { url } = value
	const id = getYouTubeId(url)
	return ("<YouTube videoId={id} />")
}

export default {
  name: 'youtubeEmbed',
  type: 'object',
  fields: [
    {
      name: 'video',
      type: 'youtubeVideo',
    },
    {
      name: 'autoplay',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'controls',
      type: 'boolean',
      initialValue: true,
    },
  ]
}


