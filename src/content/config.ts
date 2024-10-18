import { defineCollection, z } from 'astro:content';

const skillCollection = defineCollection({
  type: 'data',
  schema: z.object({
    skills: z.array(z.string())
  }),  
});

const dhbwCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    staticPath: z.string(),
    show: z.optional(z.boolean()),
  }),
});

export const collections = {
  'skills': skillCollection,
  'dhbw': dhbwCollection,
}