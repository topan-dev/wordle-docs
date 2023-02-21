import { defineUserConfig, defaultTheme, } from 'vuepress'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Wordle',
      description: '',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Wordle',
      description: '',
    },
  },
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://molmin.github.io/f/system/favicon.ico' }]],
  base: '/wordle-docs/',
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          {text: 'Usage', link: '/',},
          {text: 'Deploy', link: '/install/',},
          {text: 'Devlope', link: '/dev/',},
          {text: 'GitHub Repo', link: 'https://github.com/topan-dev/wordle.git',},
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        navbar: [
          {text: '使用', link: '/',},
          {text: '部署', link: '/install/',},
          {text: '开发', link: '/dev/',},
          {text: 'GitHub 项目', link: 'https://github.com/topan-dev/wordle.git',},
        ],
      },
    }
  }),
  plugins: [
    shikiPlugin({}),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 10
    })
  ]
});