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
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
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