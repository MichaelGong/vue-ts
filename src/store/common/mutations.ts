import { MutationTree } from 'vuex';
import { CommonState } from './types';
import { CHANGE_USERNAME } from '../constant';

const mutations: MutationTree<CommonState> = {
  [CHANGE_USERNAME](state) {
    state.userInfo.userName = '娃哈哈';
  },
};

export default mutations;
