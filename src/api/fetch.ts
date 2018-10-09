import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { Notification } from 'element-ui';

interface AxiosRequestConfigMethod extends AxiosRequestConfig {
  method: string;
}

/**
 * 处理method
 * @param {AxiosRequestConfigMethod} config 包含method的config属性
 * @param {object} [params] 参数
 */
function handleMethodPlugin(
  config: AxiosRequestConfigMethod,
  params?: object,
) {
  switch (config.method.toLowerCase()) {
    case 'get': {
      config.params = params;
      break;
    }
    case 'post':
    case 'put':
    case 'patch': {
      config.data = params;
      if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = qs.stringify(params);
      }
      break;
    }
    default: {
      config.params = params;
    }
  }
}
/**
 * 接口请求
 * @param {string} urlParams 接口url
 * @param {object} [params] 接口参数
 * @param {AxiosRequestConfig} [options] 接口配置参数
 * @returns
 */
function fetch(urlParams: string, params?: object, options?: AxiosRequestConfig) {
  const config: AxiosRequestConfigMethod = Object.assign({
    url: urlParams,
    method: 'get',
  }, options);
  handleMethodPlugin(config, params);
  return axios(config).then((response: AxiosResponse) => {
    if (+response.data.code === 200) {
      return response.data;
    }
  }).catch((error: AxiosError) => {
    Notification.error({
      title: '提示',
      message: error.message,
    });
  });
}

export default fetch;
