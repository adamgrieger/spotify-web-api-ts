import { resolve } from 'path';
import { defineConfig } from "vitest/config";

export default defineConfig({
	cacheDir: './node_modules/.vite',

	build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'spotify-web-api',
      fileName: 'spotify-web-api',
    },
  },

	test: {
		globals: true,
		cache: {
			dir: './node_modules/.vitest'
		},
		environment: 'jsdom',
		include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts}'],
		typecheck: { tsconfig: './tsconfig.test.json' }
	}
})
