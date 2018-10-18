/*
 * @Author: gonghao
 * @Date: 2018-10-17 15:02:22
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-18 14:42:24
 * @Desc: 存放基础通用工具函数
*/
import resolveTransformObj from './resolveTransform';

// 待扩展
type Itype = 'String'
  | 'Boolean'
  | 'Number'
  | 'Array'
  | 'Object'
  | 'Null'
  | 'Undefined';

interface IMatrix {
  rotate: string;
  translate: string;
}

/**
 * 判断变量类型
 * @export
 * @param {*} val 需要判断类型的变量
 * @param {Itype} type 类型的值
 * @returns
 */
export function checkType(val: any, type: Itype) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
/**
 * 添加事件监听
 * @export
 * @param {EventTarget} element 被监听的元素
 * @param {keyof GlobalEventHandlersEventMap} event 监听的事件
 * @param {(evt: any) => void} handler 监听的函数
 */
export function on(
  element: EventTarget,
  event: keyof GlobalEventHandlersEventMap,
  handler: (evt: any) => void,
): void {
  element.addEventListener(event, handler, false);
}
/**
 * 解除事件监听
 * @export
 * @param {EventTarget} element 被监听的元素
 * @param {keyof GlobalEventHandlersEventMap} event 监听的事件
 * @param {(evt: any) => void} handler 监听的函数
 */
export function off(
  element: EventTarget,
  event: keyof GlobalEventHandlersEventMap,
  handler: (evt: any) => void,
) {
  if (element && event && handler) {
    element.removeEventListener(event, handler);
  }
}

export const resolveTransform = resolveTransformObj;
