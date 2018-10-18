/*
 * @Author: gonghao
 * @Date: 2018-10-17 14:33:42
 * @Last Modified by: gonghao
 * @Last Modified time: 2018-10-18 14:48:45
 * @Desc: 拖拽指令 v-drag
*/

import { DirectiveOptions, VNode } from 'vue';
import { checkType, on, off, resolveTransform } from '@/util';
/* tslint:disable:no-console */
const dragDirective: DirectiveOptions = {
  inserted(el: HTMLElement, binding, vnode: VNode) {
    // console.log('el:', el, binding, vnode);
    let handlerDom: HTMLElement = el;
    let bodyDom: HTMLElement = el;
    let transformX: number = 0;
    let transformY: number = 0;
    let pageX: number = 0;
    let pageY: number = 0;
    let canMove: boolean = false;
    /*
      如果指定了元素，
        A: 绑定的元素是字符串，认为该字符串为需要拖动的元素
        B: 绑定的元素是对象Option，那么Option.handler表示可以拖动的元素，Option.body表示可以移动的元素
      如果没有指定元素，则默认为绑定指令的元素为拖动元素
    */
    if (binding.value) {
      if (checkType(binding.value, 'String')) {
        handlerDom = bodyDom = el.querySelector(binding.value);
      } else if (checkType(binding.value, 'Object')) {
        handlerDom = el.querySelector(binding.value.handler);
        bodyDom = el.querySelector(binding.value.body);
      }
    } else {
      handlerDom = bodyDom = el;
    }
    function handleMouseDown(e: MouseEvent): void {
      // console.log('handleMouseDown');
      const translate = resolveTransform.getTranslate(bodyDom);
      // console.log('translate:', translate);
      if (translate) {
        transformX = (translate as number[])[0];
        transformY = (translate as number[])[1];
      }
      pageX = e.pageX;
      pageY = e.pageY;
      canMove = true;
    }
    function handleMouseMove(e: MouseEvent): void {
      // console.log('canMove:', canMove);
      // e.preventDefault();
      if (canMove) {
        const offsetX = e.pageX - pageX + transformX;
        const offsetY = e.pageY - pageY + transformY;
        bodyDom.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`; // 此处坑能有bug，因为只设置了translate
      }
    }
    function handleMouseUp(e: MouseEvent): void {
      // e.preventDefault();
      // console.log('cancel');
      canMove = false;
      // off(handlerDom, 'mousedown', handleMouseDown);
      // off(handlerDom, 'mousemove', handleMouseMove);
      // off(handlerDom, 'mouseup', handleMouseUp);
    }
    on(handlerDom, 'mousedown', handleMouseDown);
    on(document, 'mousemove', handleMouseMove);
    on(document, 'mouseup', handleMouseUp);
  },
};

export default dragDirective;

