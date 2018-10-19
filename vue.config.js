const path = require('path');
const f2eci = require("./f2eci");
module.exports = {
  baseUrl: f2eci.urlPrefix || '/',

  chainWebpack: config => {
    config
      .module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.transformAssetUrls = {
            audio: 'src',
          }
          return options;
        });
    config
      .plugin('define')
        .tap(args => {
          args[0]['process.env']['CI_ENV'] = f2eci.env || '"development"'; // beta, ppe, product
          return args;
        })
        .end()
      .plugin('lodash')
        .use(require.resolve('lodash-webpack-plugin'), [{
          shorthands: true,
          currying: true,
          cloning: true,
          caching: true,
          collections: true,
          exotics: true,
          guards: true,
          metadata: true,
          deburring: true,
          unicode: true,
          chaining: true,
          memoizing: true,
          coercions: true,
          flattening: true,
          paths: true,
          placeholders: true,
        }]) 
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/css/variables/index.less'),
      ]
    }
  }
}
