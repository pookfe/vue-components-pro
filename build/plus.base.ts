import type { UserConfig } from 'vite-plus';
import { defineConfig, mergeConfig } from 'vite-plus';
import type { UserConfig as TsdownUserConfig } from 'vite-plus/pack';
import { defineConfig as defineTsdownConfig } from 'vite-plus/pack';

import { createViteConfig } from './runtime.base.ts';

/** Allow pack to accept the full tsdown UserConfig directly without wrapping in defineTsdownConfig. */
type PlusConfig = Omit<UserConfig, 'pack'> & {
  pack?: TsdownUserConfig | TsdownUserConfig[];
};

export function createPlusConfig(customConfig?: PlusConfig) {
  const baseConfig = defineConfig({
    ...createViteConfig(),
    pack: defineTsdownConfig({
      fromVite: true,
      dts: true,
      clean: true,
      unbundle: true,
    }),
  });

  return mergeConfig<PlusConfig, PlusConfig>(baseConfig, customConfig || {});
}
