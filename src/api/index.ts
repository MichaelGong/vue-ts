import { AxiosRequestConfig } from 'axios';
import { ApiConfig } from './types';
import fetch from './fetch';
import config from './config';

/**
 * 将api的配置项转换成key:val形式
 */
const ajaxUrls: {[key: string]: ApiConfig} = {};
config.forEach((item) => {
  ajaxUrls[item.name] = item;
});

/**
 * api接口
 * @param {string} apiName 接口名称
 * @param {object} params 接口参数，可选
 * @param {AxiosRequestConfig} options 接口配置，可选
 */
const apis = (
  apiName: string,
  params?: object,
  options?: AxiosRequestConfig,
) => {
  const currentAjax: ApiConfig = ajaxUrls[apiName];
  if (!currentAjax) {
    console.error('请传入正确的apiName');
    return;
  }
  return fetch(
    `${currentAjax.hostUrl}${currentAjax.path}`,
    params,
    Object.assign(
      {},
      { method: currentAjax.method },
      options || {},
    ),
  );
};

export default apis;
