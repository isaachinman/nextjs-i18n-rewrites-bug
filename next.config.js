module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },
  rewrites: async () => (
    [
      {
        source: '/',
        destination: '/company/about-us',
      },
    ]
  ),
}
