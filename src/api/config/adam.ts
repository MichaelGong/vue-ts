/*
 * @Author: gonghao
 * @Date: 2018-10-09 17:05:29
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-09 17:05:49
 * @Desc: adam相关接口
*/

import { ApiConfig } from '@/api/types';
import { adamHost } from '../host';

const configList: ApiConfig[] = [
  {
    name: 'getList',
    method: 'get',
    path: '/list',
    host: adamHost,
  },
];

export default configList;
