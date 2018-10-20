/* fix ElementUI Scrollbar 没有types */
declare module 'element-ui' {
  import { ElementUIComponent } from 'element-ui/types/component';
  class ElScrollbar extends ElementUIComponent {}

  export * from 'element-ui/types';
  export class Scrollbar extends ElScrollbar {}
}

declare module 'vue-canvas-nest' {}
