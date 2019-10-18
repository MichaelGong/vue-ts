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
        import(/* webpackChunkName: "filterhue" */ './views/FilterHue/index.vue'),
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () =>
        import(/* webpackChunkName: "ticket" */ './views/Ticket/index.vue'),
    },
    {
      path: '/audio',
      name: 'audio',
      component: () =>
        import(/* webpackChunkName: "audio" */ './views/Audio/index.vue'),
    },
    {
      path: '/cube',
      name: 'cube',
      component: () =>
        import(/* webpackChunkName: "cube" */ './views/Cube/index.vue'),
    },
    {
      path: '/jstypeconversion',
      name: 'jstypeconversion',
      component: () =>
        import(/* webpackChunkName: "JSTypeConversion" */ './views/JSTypeConversion/index.vue'),
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () =>
        import(/* webpackChunkName: "knowledge" */ './views/Knowledge/index.vue'),
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
