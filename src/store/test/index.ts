import { Module, ActionTree, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { TestState } from './types';
import state from './state';
import actions from './actions';
import mutations from './mutations';

const testModule: Module<TestState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default testModule;
