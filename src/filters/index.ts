/*
 * @Author: gonghao
 * @Date: 2018-10-10 11:35:12
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-10 14:13:33
 * @Desc: 自定义全局过滤器
*/
import Vue from 'vue';
// 获取并注册指令
const files = require.context('./', true, /^\.\/([\w\W]*)\.ts$/);
files.keys().forEach((key) => {
  if (key === './index.ts') {
    return false;
  }
  const name = key.replace(/(\.\/|\.ts)/g, '');
  Vue.filter(name, files(key).default);
});
