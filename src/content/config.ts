import { defineCollection, z } from "astro:content";

const compareCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    lastVerified: z.date(),
    author: z.string().default("Cmprly Editorial"),
  }),
});

const bestCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    lastVerified: z.date(),
    author: z.string().default("Cmprly Editorial"),
  }),
});

export const collections = {
  compare: compareCollection,
  best: bestCollection,
};
