import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
// hab da an fehler gehabt
// Original:

//export default config;

export default {
	kit: {
	  adapter: adapter({
		fallback: '200.html'
	  })
	}
  };