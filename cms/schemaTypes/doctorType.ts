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
      name: 'role',
      title: 'Specialization/Role',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'bio',
      title: 'Detailed Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in listings',
      validation: (rule) => rule.integer().positive(),
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      order: 'order',
    },
    prepare({title, subtitle, media, order}) {
      return {
        title,
        subtitle: `${subtitle}${order ? ` (Order: ${order})` : ''}`,
        media,
      }
    }
  }
})
