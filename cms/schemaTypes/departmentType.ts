import {defineField, defineType} from 'sanity'

export const departmentType = defineType({
  name: 'department',
  title: 'Departments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Department Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of Lucide React icon (e.g., "Heart", "Brain", "alarm-clock"). Visit https://lucide.dev/icons/ for reference',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Brief introduction about this department',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Department Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      description: 'Add sections with bullet points (e.g., Services Offered, Technologies, Conditions Treated)',
    }),
    defineField({
      name: 'conclusionText',
      title: 'Conclusion Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Optional conclusion paragraph',
    }),
    defineField({
      name: 'doctors',
      title: 'Department Doctors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'doctors'}],
        }
      ],
      description: 'Doctors specializing in this department',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display departments (lower numbers displayed first)',
      validation: (rule) => rule.required().integer().positive(),
      initialValue: 10,
    }),
    defineField({
      name: 'showInNavbar',
      title: 'Show in Navbar',
      type: 'boolean',
      description: 'Whether to show this department in the main navigation',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'iconName',
      media: 'image',
    },
    prepare({title, icon, media}) {
      return {
        title,
        subtitle: `Icon: ${icon || 'None'}`,
        media,
      }
    },
  },
}) 