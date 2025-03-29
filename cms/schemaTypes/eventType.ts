import {defineField, defineType} from 'sanity'

export const doctorType = defineType({
  name: 'doctors',
  title: 'Doctors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule
      .required()
      .error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'specialization',
      type: 'text',
    }),
    defineField({
      name: 'experience',
      type: 'number',
    }),
  ],
})
