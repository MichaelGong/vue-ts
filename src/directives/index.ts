/*
 * @Author: gonghao
 * @Date: 2018-10-10 11:35:12
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-10 14:13:44
 * @Desc: 自定义全局指令
*/
import Vue from 'vue';
// 获取并注册指令
const files = require.context('./', true, /^\.\/([\w\W]*)\.ts$/);
files.keys().forEach((key) => {
  if (key === './index.ts') {
    return false;
  }
  const name = key.replace(/(\.\/|\.ts)/g, '');
  Vue.directive(name, files(key).default);
});
