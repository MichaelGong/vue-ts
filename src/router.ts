import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About/index.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () =>
        import(/* webpackChunkName: "demo" */ './views/Demo/index.vue'),
    },
    {
      path: '/drag',
      name: 'drag',
      component: () =>
        import(/* webpackChunkName: "drag" */ './views/Drag/index.vue'),
    },
    {
      path: '/filterhue',
      name: 'filterhue',
      component: () =>
        import(/* webpackChunkName: "drag" */ './views/FilterHue/index.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
