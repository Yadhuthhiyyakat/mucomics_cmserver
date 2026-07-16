// src/collections/Comics.ts
import type { CollectionConfig } from 'payload';

const GENRES = ['SCI-FI', 'CYBERPUNK', 'ACTION', 'FANTASY', 'COMEDY'];

export const Comics: CollectionConfig = {
  slug: 'comics',
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // ── Core Info ────────────────────────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'issue',
      type: 'text',
      defaultValue: 'Issue #1',
    },
    {
      name: 'genre',
      type: 'select',
      options: GENRES.map((g) => ({ label: g, value: g })),
      defaultValue: 'SCI-FI',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },

    // ── Media ─────────────────────────────────────────────────────────────────
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'covers',
      required: true,
    },

    // ── Creative Team ─────────────────────────────────────────────────────────
    {
      name: 'writer',
      type: 'text',
    },
    {
      name: 'artist',
      type: 'text',
    },
    {
      name: 'colorist',
      type: 'text',
    },
    {
      name: 'pagesCount',
      type: 'number',
      defaultValue: 24,
    },

    // ── Publishing Stats ───────────────────────────────────────────────────────
    {
      name: 'rank',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower number = higher rank position in listings.',
      },
    },
    {
      name: 'stars',
      type: 'text',
      defaultValue: '0.0K',
      admin: {
        description: 'Display string for star count, e.g. "4.2K".',
      },
    },
    {
      name: 'isNew',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'publisherDate',
      type: 'text',
      admin: {
        description: 'Human-readable publish date, e.g. "July 2025".',
      },
    },

    // ── Chapters / PDFs ────────────────────────────────────────────────────────
    {
      name: 'chapters',
      type: 'array',
      fields: [
        {
          name: 'chapterNumber',
          type: 'number',
          required: true,
        },
        {
          name: 'chapterTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'pdfFile',
          type: 'upload',
          relationTo: 'pdfs',
          required: true,
        },
      ],
    },
  ],
};