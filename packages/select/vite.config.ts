import { createPlusConfig } from '../../build/plus.base.ts';

export default createPlusConfig({
  pack: {
    entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.test.ts', '!src/**/tests'],
  },
  test: {
    environment: 'jsdom',
  },
});
