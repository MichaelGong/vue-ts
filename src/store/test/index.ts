import { Module, ActionTree, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { TEST_GET_DATA } from '../constant';
import { TestState } from './types';
import apis from '@/api';

const testState: TestState = {
  data: {},
};
const actions: ActionTree<TestState, RootState> = {
  async getData({ commit }) {
    const data = await apis('loadMetricDimByMart', {
      martName: 'pro_cpc_r',
    });
    commit(TEST_GET_DATA, data.data.pro_cpc_r);
  },
};

const mutations: MutationTree<TestState> = {
  [TEST_GET_DATA](state, data) {
    state.data = data;
  },
};

const testModule: Module<TestState, RootState> = {
  namespaced: true,
  state: testState,
  actions,
  mutations,
};

export default testModule;
