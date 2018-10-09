const f2eci = require("./f2eci");
module.exports = {
  baseUrl: f2eci.urlPrefix || '/',
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env']['CI_ENV'] = f2eci.env || '"development"'; // beta, ppe, product
        return args;
      })
  }
}