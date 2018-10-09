import { Module, ActionTree, MutationTree } from 'vuex';
import { CommonState } from '@/store/common/types';
import { RootState } from '@/store/types';
import { CHANGE_USERNAME } from '../constant';

const commonState: CommonState = {
  userInfo: {
    userName: '哈哈哈',
  },
  currentDate: '',
};

const actions: ActionTree<CommonState, RootState> = {
  changeUserName({ commit }): void {
    commit(CHANGE_USERNAME);
  },
};

const mutations: MutationTree<CommonState> = {
  [CHANGE_USERNAME](state) {
    state.userInfo.userName = '娃哈哈';
  },
};

const commonModule: Module<CommonState, RootState> = {
  namespaced: true,
  state: commonState,
  actions,
  mutations,
};

export default commonModule;
