import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GeoDa.AI + Kepler.gl',
  description:
    'The documentation of Spatial Data Analysis with Kepler.gl AI Assistant',
  base: '/docs-kepler-ai/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/guide' },
          { text: 'Get Started', link: '/1-get-started' },
          {
            text: 'Spatial Data Wrangling (1): Basic Operations',
            link: '/2-spatial-data-wrangling',
          },
          {
            text: 'Spatial Data Wrangling (2): GIS Operations',
            link: '/3-spatial-data-2',
          },
          { text: 'Basic Mapping', link: '/4-basic-mapping' },
          { text: 'Rate Mapping', link: '/5-map-rates' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geodaai/docs-kepler-ai' },
    ],
  },
});
