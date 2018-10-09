import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import common from './common';
import { RootState } from '@/store/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.0.1',
  },
  mutations: {},
  actions: {},
  modules: {
    common,
  },
};

export default new Vuex.Store(store);
