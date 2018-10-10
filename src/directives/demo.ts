/*
 * @Author: gonghao
 * @Date: 2018-10-10 11:39:44
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-10 11:42:16
 * @Desc: demo指令
*/
import { DirectiveOptions } from 'vue';

const demoDirevtive: DirectiveOptions = {
  bind: (el, binding, vnode) => {
    const s = JSON.stringify;
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ');
  },
};

export default demoDirevtive;
