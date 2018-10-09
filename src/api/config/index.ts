import { ApiConfig } from '@/api/types';
import adamConfigs from './adam';

const CI_ENV = process.env.CI_ENV; // development、beta、ppe、product
// 所有接口配置集合
const configList: ApiConfig[] = [...adamConfigs];
// 根据当前环境切换hostUrl
configList.forEach((apiConfig: ApiConfig) => {
  apiConfig.hostUrl = apiConfig.host[CI_ENV];
});


export default configList;
