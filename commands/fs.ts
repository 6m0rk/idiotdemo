import { FileSystem } from 'javascript-terminal';

export const fs = {
  fs: FileSystem.create({
    '/home': {},
    '/home/README': { content: 'This is a text file' },
    '/home/nested/directory': {},
    '/home/nested/directory/file': { content: 'End of nested directory!' },
  }),
};
