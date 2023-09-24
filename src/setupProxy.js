const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Specify the API path you want to proxy
    createProxyMiddleware({
      target: "http://birdworldtest1-001-site1.itempurl.com/",
      changeOrigin: true,
    })
  );
};
