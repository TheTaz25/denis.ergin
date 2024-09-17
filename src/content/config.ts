import { defineCollection, z } from 'astro:content';

const skillCollection = defineCollection({
  type: 'data',
  schema: z.object({
    skills: z.array(z.string())
  }),  
});

export const collections = {
  'skills': skillCollection,
}