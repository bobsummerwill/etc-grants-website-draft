module.exports = {
  use: "gridsome-plugin-i18n",
  options: {
    locales: [
      'en',
      'zh'
    ],
    fallbackLocale: 'en',
    defaultLocale: 'en',
    enablePathRewrite: true,
    rewriteDefaultLanguage: true,
    enablePathGeneration: false,
    routes: require('../routes.js')
  }
}
