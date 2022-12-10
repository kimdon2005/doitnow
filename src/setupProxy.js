const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.doitnow.kr/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}