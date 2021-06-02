// Require i18n configuration
const i18n = require('./plugins/i18n')

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const lostgrid = require('lost')

const pluginsList = [tailwindcss, autoprefixer, lostgrid]

module.exports = {
  siteName: 'Gridsome i18n Boilerplate',
  css: {
    loaderOptions: {
      postcss: {
        plugins: pluginsList
      }
    }
  },
  plugins: [
    i18n,
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostEn',
        path: './src/content/blog/**/*.en.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostIt',
        path: './src/content/blog/**/*.it.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostPt',
        path: './src/content/blog/**/*.pt.md',
      },
    },
  ],
  templates: {
    PostEn: '/en/blog/:slug',
    PostIt: '/it/blog/:slug',
    PostPt: '/pt/blog/:slug',
  }
}
