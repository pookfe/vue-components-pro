import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types';

export function createViteConfig(customConfig: UserConfig = {}) {
  const baseConfig = {
    plugins: [
      vue(),
      tsxResolveTypes({
        defaultPropsToUndefined: true,
      }),
      vueJsx(),
    ],
  } satisfies UserConfig;

  return mergeConfig(baseConfig, customConfig);
}
