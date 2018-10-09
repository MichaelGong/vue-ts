export interface UserInfo {
  userName?: string;
}
/**
 * 通用的state
 * @interface
 * @property {UserInfo} userInfo 用户基本信息
 * @property {string} currentDate 当前日期
 */
export interface CommonState {
  userInfo: UserInfo;
  currentDate: string;
}
