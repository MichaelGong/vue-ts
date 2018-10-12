import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import common from './common';
import test from './test';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  // state: {
  //   version: '0.0.1',
  // },
  // mutations: {},
  // actions: {},
  modules: {
    common,
    test,
  },
};

export default new Vuex.Store<RootState>(store);
