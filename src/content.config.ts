import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const newDhbwCollection = defineCollection({
  loader: file('./src/content/dhbw/de/web-engineering.json'),
  schema: z.object({
    sectionName: z.string(),
    links: z.array(z.object({
      to: z.string(),
      linkedTo: z.enum(['slides']),
      title: z.string(),
    }))
  })
})


export const collections = {
  'dhbw': newDhbwCollection,
};
