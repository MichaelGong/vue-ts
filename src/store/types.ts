import { CommonState } from './common/types';
import { TestState } from './test/types';
export interface RootState {
  // version?: string;
  common?: CommonState;
  test?: TestState;
}
