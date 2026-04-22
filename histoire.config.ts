import { HstVue } from '@histoire/plugin-vue';
import { defineConfig } from 'histoire';

import { createViteConfig } from './build/runtime.base.ts';

export default defineConfig({
  plugins: [HstVue()],
  storyMatch: ['**/*.stories.vue'],
  vite: createViteConfig({}),
});
