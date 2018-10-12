import { GetterTree } from 'vuex';
import { CommonState } from './types';
import { RootState } from '@/store/types';

const gettters: GetterTree<CommonState, RootState> = {
  userName(state: CommonState) {
    return state.userInfo.userName;
  },
};

export default gettters;
