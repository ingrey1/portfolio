require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jason\'s Technical Writing Portfolio',
  tagline: 'Welcome to my site!',
  url: 'https://ingrey1.github.io',
  baseUrl: '/portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ingrey1', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Introduction',
        logo: {
          alt: 'Introduction',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Docusaurus Projects/docusaurus-intro',
            position: 'left',
            label: 'Technical Writing Samples',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/parable', label: 'A Parable', position: 'left'},
          {to: '/about', label: 'About Me', position: 'left'},
          {
            href: 'https://github.com/ingrey1/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Writing Tree, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    customFields: {
      'API_KEY': process.env.API_KEY,
    }
};

module.exports = config;
