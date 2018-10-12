import { ActionTree } from 'vuex';
import { TestState } from './types';
import { RootState } from '../types';
import { TEST_GET_DATA } from '../constant';
import apis from '@/api';

const actions: ActionTree<TestState, RootState> = {
  async getData({ commit, rootState }) {
    const data = await apis('loadMetricDimByMart', {
      martName: 'pro_cpc_r',
    });
    commit(TEST_GET_DATA, data.data.pro_cpc_r);
  },
};

export default actions;
