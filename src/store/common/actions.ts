import { ActionTree } from 'vuex';
import { CommonState } from './types';
import { RootState } from '../types';
import { CHANGE_USERNAME } from '../constant';

const actions: ActionTree<CommonState, RootState> = {
  changeUserName({ commit }): void {
    commit(CHANGE_USERNAME);
  },
};
export default actions;
