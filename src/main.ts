import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'ress';
import './registerServiceWorker';
import './plugins/element';
import './directives';
import './filters';
import '@/css/global.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
