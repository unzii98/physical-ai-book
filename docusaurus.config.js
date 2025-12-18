// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** Detect environment: Vercel sets process.env.VERCEL = '1' during build */
const isVercel = !!process.env.VERCEL;

/** Replace with your Vercel domain exactly as shown in Vercel dashboard */
const VERCEL_URL = 'https://physical-ai-book-czbd.vercel.app';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI',
  tagline: 'The Comprehensive Guide to Embodied Intelligence',
  favicon: 'img/favicon.ico',

  // url + baseUrl now switch depending on environment
  url: isVercel ? VERCEL_URL : 'https://unzii98.github.io',
  baseUrl: isVercel ? '/' : '/physical-ai-book/',

  // GitHub info can remain (useful if you still push to GitHub Pages)
  organizationName: 'unzii98',
  projectName: 'physical-ai-book',

  // during CI builds you may prefer warn to avoid failing the build for small issues
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },

        {to: '/about', label: 'About', position: 'left'},
            {
  href: 'https://github.com/unzii98/physical-ai-book',
  position: 'right',
  className: 'header-github-link',
  'aria-label': 'GitHub repository',
},
        {to: '/contact', label: 'Contact', position: 'left'},
        {to: '/signin', label: 'Sign In', position: 'right'},
      

      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Start Reading',
              to: '/docs/robotic-nervous-system/nodes-topics-services',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Book.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
