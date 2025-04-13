import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      description: 'The mission statement shown in blockquote',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      description: 'The main description paragraph below the mission statement',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'listItems',
              title: 'List Items',
              type: 'array',
              of: [{type: 'string'}],
              description: 'Bullet points for this section',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              items: 'listItems',
            },
            prepare({title, items}) {
              return {
                title,
                subtitle: `${items?.length || 0} items`,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'conclusionText',
      title: 'Conclusion Text',
      type: 'text',
      description: 'The final paragraph after all sections',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'mission',
    },
    prepare() {
      return {
        title: 'About Us Page',
      }
    },
  },
}) 