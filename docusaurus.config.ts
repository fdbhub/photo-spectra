import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PhotoSpectra',
  tagline: 'Your Private Photo Library Manager',
  favicon: 'img/icon.png',
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  url: 'https://fdbhub.github.io/',
  baseUrl: '/photo-spectra/',

  organizationName: 'fdbhub',
  projectName: 'photo-spectra',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/icon.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PhotoSpectra',
      logo: {
        alt: 'PhotoSpectra Logo',
        src: 'img/icon.png',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/roadmap', label: 'Roadmap', position: 'left'},
        {to: '/privacy', label: 'Privacy Policy', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/fdbhub/photo-spectra',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/features',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Roadmap',
              to: '/roadmap',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fdbhub/photo-spectra',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PhotoSpectra. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
