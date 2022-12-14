module.exports = {
    title: 'peda360',
    tagline: 'Dijital Dönüşüm Yol Arkadaşınız',
    url: 'http://peda360.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'icon/peda.ico',
    organizationName: 'Pedasoft',
    projectName: 'peda360',
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Peda360',
            logo: {
                alt: 'Peda360',
                src: 'img/peda360-logo.png',
                // srcDark: 'img/logo white.svg'
            },
            hideOnScroll: true,
            items: [{
                    to: '/',
                    position: 'left',
                    label: 'Ana Sayfa',
                },
                {
                    to: '/appstore',
                    position: 'left',
                    label: 'Çözümlerimiz',
                },
                {
                    type: 'docsVersion',
                    position: 'left',
                    label: 'Dökümantasyon',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                /* {
                    type: 'docsVersionDropdown',
                    position: 'right',
                }, */
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://www.pedasoft.com.tr/peda360iletisim',
                    html: '<b>Üye Ol</b>',
                    position: 'right',

                    target: '_new',
                    'aria-label': 'GitHub repository'
                },
                {
                    href: 'http://apps.peda360.com',
                    html: 'Kullanmaya Başlayın',
                    position: 'right',
                    className: 'get-started-button',
                    target: '_new',
                    'aria-label': 'GitHub repository'
                }
                /*   {
                      alt: 'Github repository',
                      href: 'https://github.com/tuvalframework/framework',
                      className: 'header-gitlab-link',
                      position: 'right'
                  }, */
            ],
        },
        footer: {
            style: "light",
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Introduction',
                        to: 'docs/',
                    }],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/pedasoft/',
                        },

                    ],
                },
                {
                    title: 'Website',
                    items: [{
                        label: 'Pedasoft',
                        href: 'https://pedasoft.com.tr',
                    }],
                },
            ],
            copyright: `Peda360 bir Pedasoft markasıdır`,
        },
        /*   algolia: {
              appId: '6Q4OIC1WEX',
              apiKey: 'c2f659f7d38e9b697dfa69f1e1dd1407',
              indexName: 'website',
              contextualSearch: true,
          },*/
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        /*   prism: {
              additionalLanguages: ['java'],
          }, */
    },
    i18n: {
        defaultLocale: 'tr',
        locales: ['tr', 'en' ],
        localeConfigs: {
            es: {
                label: 'Turkish',
                direction: 'ltr',
            },
            en: {
                label: 'English',
                direction: 'ltr',
            },
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                gtag: {
                    trackingID: 'G-KTRN59595W',
                    anonymizeIP: true,
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/PedasoftDev/web-site/blob/main/',
                    includeCurrentVersion: true,
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
                    postsPerPage: 3,
                    feedOptions: {
                        type: 'all',
                        language: 'es',
                        copyright: `Copyright © ${new Date().getFullYear()} Almis, Inc.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};