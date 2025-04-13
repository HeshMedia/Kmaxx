import {defineField, defineType} from 'sanity'

export const homeAboutType = defineType({
  name: 'homeAbout',
  title: 'Home About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The "ABOUT US" title (only one instance needed)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The about section description text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Home About Section',
      }
    },
  },
}) 