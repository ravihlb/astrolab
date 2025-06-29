import adapter from "@sveltejs/adapter-static";
import mdsvexConfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

    kit: {
        adapter: adapter(),
        alias: {
            "@": "./",
            "@client": "./src/client",
            "@constants": "./src/constants",
            "@components": "./src/components",
        },
    },
};

export default config;
