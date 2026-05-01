import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ en: z.string(), pt: z.string() });

const issues = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/issues' }),
  schema: z.object({
    number: z.string(),
    date: z.coerce.date(),
    seasonLabel: localized,
    pageRange: z.string(),
    isCurrent: z.boolean().default(false),
    contentsBlurb: localized,
    contentsRange: z.string(),
    coverPiece: z.string(),
    agenda: z
      .array(
        z.object({
          when: localized,
          where: localized,
          what: localized,
        })
      )
      .default([]),
    frontOfBook: z
      .array(
        z.object({
          label: localized,
          title: localized,
          body: localized,
          by: localized,
        })
      )
      .default([]),
  }),
});

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pieces' }),
  schema: z.object({
    pieceSlug: z.string(),
    locale: z.enum(['en', 'pt']),
    issue: z.string(),
    section: z.enum(['essay', 'interview', 'note', 'agenda']),
    pieceNumber: z.number().optional(),
    title: z.string(),
    deck: z.string().optional(),
    author: z.string(),
    authorBio: z.string().optional(),
    date: z.coerce.date(),
    lengthWords: z.number().optional(),
    readMinutes: z.number().optional(),
    figcap: z.string().optional(),
    hasBody: z.boolean().default(false),
  }),
});

export const collections = { issues, pieces };
