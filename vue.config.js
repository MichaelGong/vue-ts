const path = require('path');
const f2eci = require("./f2eci");
const isPro = process.env.NODE_ENV === 'production';
const sentryRelease = new Date().getTime();
const SENTRY_API_KEY = '44c48b8185184208b9587e5806aa0520009eb7d7af4c4b409fe37e8b37fdb884';

module.exports = {
  baseUrl: f2eci.urlPrefix || '/',
  configureWebpack: config => {
    if (isPro) {
      config.devtool = 'source-map';
    }
  },
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
          args[0]['process.env']['CI_ENV'] = f2eci.env ? JSON.stringify(f2eci.env) : '"development"'; // beta, ppe, product
          args[0]['process.env']['sentryRelease'] = JSON.stringify(sentryRelease);
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
        .end()
      .plugin('sentry')
        .use(require.resolve('webpack-sentry-plugin'), [{
          organization: 'sentry',
          project: 'vuelab',
          apiKey: SENTRY_API_KEY,
          release: sentryRelease,
          baseSentryURL: 'https://sentry.happybug.top/api/0',
        }])
  },
  pwa: {
    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
      skipWaiting: true,
      clientsClaim: true,
    },
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon48.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    }
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
