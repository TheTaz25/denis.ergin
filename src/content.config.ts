import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dhbwCollection = defineCollection({
  loader: glob({ pattern: '*.(mdx|md)', base: './src/content/dhbw/de' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    staticPath: z.string(),
    show: z.optional(z.boolean()),
    order: z.number(),
  }),
});

const homeCollection = defineCollection({
  type: 'content',
})

export const collections = {
  'dhbw': dhbwCollection,
  'home': homeCollection,
}