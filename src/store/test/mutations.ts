import { MutationTree } from 'vuex';
import { TestState } from './types';
import { TEST_GET_DATA } from '../constant';

const mutations: MutationTree<TestState> = {
  [TEST_GET_DATA](state, data) {
    state.data = data;
  },
};

export default mutations;
