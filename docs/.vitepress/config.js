import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kepler.gl AI Assistant",
  description: "The documentation of Spatial Data Analysis with Kepler.gl AI Assistant",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geodaai/docs-kepler-ai-assistant' }
    ]
  }
})
