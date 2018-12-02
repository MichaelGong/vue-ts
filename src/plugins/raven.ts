import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
  .config('https://258decd4808c4bbcb46e336b9febd5a2@sentry.happybug.top/3', {
    release: 'product@0.0.2',
  })
  .addPlugin(RavenVue, Vue)
  .install();
