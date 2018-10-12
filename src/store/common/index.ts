/*
 * @Author: gonghao
 * @Date: 2018-10-12 10:59:35
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-12 10:59:57
 * @Desc: 通用的store
*/
import { Module } from 'vuex';
import { CommonState } from '@/store/common/types';
import { RootState } from '@/store/types';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const commonModule: Module<CommonState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default commonModule;
