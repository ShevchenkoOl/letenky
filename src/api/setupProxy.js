const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ 
    target: 'https://pastebin.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Если ваш API-адрес начинается с /api, вы можете удалить его из URL
    },
  }));
};
