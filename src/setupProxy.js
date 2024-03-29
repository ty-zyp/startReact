const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
      pathRewrite:{'^/api1':''}
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
      pathRewrite:{'^/api2':''}
    }),

  )
}