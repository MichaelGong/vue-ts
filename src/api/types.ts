/** 请求方法 */
export type AsyncMethod =
  | 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

/**
 * Host配置
 * @export
 * @interface Host
 */
export interface Host {
  // [key: string]: string; // 必须包括所用成员类型
  /**
   * 开发环境
   * @type {string}
   * @memberof Host
   */
  development?: string;
  /**
   * 测试环境
   * @type {string}
   * @memberof Host
   */
  ppe?: string;
  /**
   * beta环境
   * @type {string}
   * @memberof Host
   */
  beta?: string;
  /**
   * 线上环境
   * @type {string}
   * @memberof Host
   */
  product?: string;
  [key: string]: any;
}

/**
 * Api的配置
 * @export
 * @interface ApiConfig
 */
export interface ApiConfig {
  /**
   * api方法名称，具有唯一性
   * @type {string}
   * @memberof ApiConfig
   */
  name: string;
  /**
   * 请求方法名
   * @type {AsyncMethod}
   * @memberof ApiConfig
   */
  method: AsyncMethod;
  /**
   * host配置
   * @type {Host}
   * @memberof ApiConfig
   */
  host: Host;
  /**
   * host url
   * @type {Host}
   * @memberof ApiConfig
   */
  hostUrl?: string;
  /**
   * api路径
   * @type {string}
   * @memberof ApiConfig
   */
  path: string;
  /**
   * 是否mock
   * @type {boolean}
   * @memberof ApiConfig
   */
  mock?: boolean;
  /**
   * mockId
   * @type {(boolean | number)}
   * @memberof ApiConfig
   */
  mockId?: boolean | number;
}
