import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: page => !page.includes('mods/'),
    }),
  ],
  site: 'https://zen-browser.app',
})
