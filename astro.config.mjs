import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // Import the Netlify adapter

export default defineConfig({
  site: 'https://www.aboexit.ch',
  trailingSlash: 'always', // Enforces trailing slashes on all URLs
  output: 'static', // Ensures Astro generates static files
  adapter: netlify(), // Initialize the Netlify adapter as an object
});
