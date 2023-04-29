import { defineConfig } from 'vite'
import topLevelAwait from "vite-plugin-top-level-await";
import webfontDownload from 'vite-plugin-webfont-dl';
import urlResolve from 'rollup-plugin-url-resolve';
import { exec } from 'child_process';


// https://vitejs.dev/config/
export default defineConfig({
	base: '/wpe-plot', // CHANGE THIS FOR YOUR DEPLOYMEN
	build: {
		lib: {
			entry: 'index.html',
      formats: ['es'],
    },
		rollupOptions: {
			plugins: [
				urlResolve({
					cacheManager: '.cache',
					minify: true,
				})
			]
		},
	},
	plugins: [
		topLevelAwait({
			promiseExportName: "__tla",
			promiseImportName: i => `__tla_${i}`
		}),
		webfontDownload(),
	]
})
