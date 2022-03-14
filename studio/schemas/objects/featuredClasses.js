export default {
  title: 'Featured Classes',
  name: 'featuredClasses',
  type: 'array',
  of: [{type: 'featuredClass'}],
  validation: Rule => Rule.required().length(3)
};