import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*.{js,jsx,ts,tsx,mjs,cjs,cts,mts,vue,json,jsonc,yml,yaml,md,css,scss,less}': 'vp fmt --write',
  },
  fmt: {
    singleQuote: true,
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  // run: {
  //   cache: {
  //     scripts: false,
  //   },
  // },
});
