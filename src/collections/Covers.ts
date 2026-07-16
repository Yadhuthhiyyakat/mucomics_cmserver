// src/collections/Covers.ts
import path from 'path';
import { fileURLToPath } from 'url';
import type { CollectionConfig } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Covers: CollectionConfig = {
  slug: 'covers',
  upload: {
    // Routes the physical image files to your local hard drive folder
    staticDir: path.resolve(dirname, '../../storage-covers'),
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'alt', type: 'text', required: true }
  ],
};