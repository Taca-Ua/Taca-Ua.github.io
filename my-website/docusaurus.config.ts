import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Taça UA Minisite',
  tagline: 'A maior competição inter-cursos de Portugal',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Configuração para GitHub Pages
  url: 'https://taca-ua.github.io',
  baseUrl: '/',

  organizationName: 'Taca-Ua',
  projectName: 'Taca-Ua.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Taca-Ua/taca-ua/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Taca-Ua/taca-ua/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/taca-ua-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Taça UA',
      logo: {
        alt: 'Taça UA Logo',
        src: 'img/tacaua.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        { to: '/blog', label: 'Notícias', position: 'left' },
        {
          href: 'https://github.com/Taca-Ua',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
            {
              label: 'Regulamento',
              to: '/docs/regulamento',
            },
            {
              label: 'Como Participar',
              to: '/docs/participar',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/tacaua',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/tacaua',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/tacaua',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Notícias',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Taca-Ua',
            },
            {
              label: 'Universidade de Aveiro',
              href: 'https://www.ua.pt',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taça UA - Universidade de Aveiro. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;