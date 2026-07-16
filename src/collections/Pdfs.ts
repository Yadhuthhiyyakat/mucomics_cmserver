// src/collections/Pdfs.ts
import path from 'path';
import { fileURLToPath } from 'url';
import type { CollectionConfig } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Pdfs: CollectionConfig = {
  slug: 'pdfs',
  upload: {
    // Routes the physical binary PDF books to your local hard drive folder
    staticDir: path.resolve(dirname, '../../storage-pdfs'),
    mimeTypes: ['application/pdf'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true }
  ],
};